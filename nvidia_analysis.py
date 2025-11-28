import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
import json

# Set style
sns.set_style('whitegrid')
plt.rcParams['figure.facecolor'] = 'white'

# Fetch NVIDIA data
print("Fetching NVIDIA data...")
nvda = yf.Ticker("NVDA")

# Get 1 year of historical data
end_date = datetime.now()
start_date = end_date - timedelta(days=365)
hist = nvda.history(start=start_date, end=end_date)

# Get company info
info = nvda.info

# Key insights
insights = {
    "Company": info.get('longName', 'NVIDIA Corporation'),
    "Current Price": f"${info.get('currentPrice', 'N/A')}",
    "Market Cap": f"${info.get('marketCap', 0) / 1e12:.2f}T",
    "52 Week High": f"${info.get('fiftyTwoWeekHigh', 'N/A')}",
    "52 Week Low": f"${info.get('fiftyTwoWeekLow', 'N/A')}",
    "P/E Ratio": f"{info.get('trailingPE', 'N/A')}",
    "1Y Return": f"{((hist['Close'][-1] / hist['Close'][0] - 1) * 100):.1f}%",
    "Avg Volume": f"{info.get('averageVolume', 0) / 1e6:.1f}M"
}

# Save insights
with open('/vercel/sandbox/nvidia_insights.json', 'w') as f:
    json.dump(insights, f, indent=2)

print("Creating visualizations...")

# Create figure with subplots
fig = plt.figure(figsize=(16, 10))

# 1. Price Chart
ax1 = plt.subplot(2, 3, 1)
ax1.plot(hist.index, hist['Close'], linewidth=2, color='#76b900')
ax1.fill_between(hist.index, hist['Close'], alpha=0.3, color='#76b900')
ax1.set_title('NVIDIA Stock Price (1 Year)', fontsize=14, fontweight='bold')
ax1.set_xlabel('Date')
ax1.set_ylabel('Price ($)')
ax1.grid(True, alpha=0.3)

# 2. Volume Chart
ax2 = plt.subplot(2, 3, 2)
ax2.bar(hist.index, hist['Volume'] / 1e6, color='#76b900', alpha=0.7)
ax2.set_title('Trading Volume', fontsize=14, fontweight='bold')
ax2.set_xlabel('Date')
ax2.set_ylabel('Volume (Millions)')
ax2.grid(True, alpha=0.3)

# 3. Monthly Returns
monthly_returns = hist['Close'].resample('M').last().pct_change() * 100
ax3 = plt.subplot(2, 3, 3)
colors = ['green' if x > 0 else 'red' for x in monthly_returns]
ax3.bar(range(len(monthly_returns)), monthly_returns, color=colors, alpha=0.7)
ax3.set_title('Monthly Returns (%)', fontsize=14, fontweight='bold')
ax3.set_xlabel('Month')
ax3.set_ylabel('Return (%)')
ax3.axhline(y=0, color='black', linestyle='-', linewidth=0.5)
ax3.grid(True, alpha=0.3)

# 4. Price Range (High-Low)
ax4 = plt.subplot(2, 3, 4)
ax4.fill_between(hist.index, hist['Low'], hist['High'], alpha=0.4, color='#76b900')
ax4.plot(hist.index, hist['Close'], linewidth=2, color='black', label='Close')
ax4.set_title('Daily Price Range', fontsize=14, fontweight='bold')
ax4.set_xlabel('Date')
ax4.set_ylabel('Price ($)')
ax4.legend()
ax4.grid(True, alpha=0.3)

# 5. Moving Averages
ax5 = plt.subplot(2, 3, 5)
ma20 = hist['Close'].rolling(window=20).mean()
ma50 = hist['Close'].rolling(window=50).mean()
ax5.plot(hist.index, hist['Close'], linewidth=1.5, label='Close', color='#76b900')
ax5.plot(hist.index, ma20, linewidth=1.5, label='MA20', color='orange', linestyle='--')
ax5.plot(hist.index, ma50, linewidth=1.5, label='MA50', color='red', linestyle='--')
ax5.set_title('Moving Averages', fontsize=14, fontweight='bold')
ax5.set_xlabel('Date')
ax5.set_ylabel('Price ($)')
ax5.legend()
ax5.grid(True, alpha=0.3)

# 6. Key Metrics Table
ax6 = plt.subplot(2, 3, 6)
ax6.axis('off')
table_data = [[k, v] for k, v in insights.items()]
table = ax6.table(cellText=table_data, colLabels=['Metric', 'Value'],
                  cellLoc='left', loc='center', colWidths=[0.5, 0.5])
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 2)
for i in range(len(table_data) + 1):
    if i == 0:
        table[(i, 0)].set_facecolor('#76b900')
        table[(i, 1)].set_facecolor('#76b900')
        table[(i, 0)].set_text_props(weight='bold', color='white')
        table[(i, 1)].set_text_props(weight='bold', color='white')
    else:
        table[(i, 0)].set_facecolor('#f0f0f0')
        table[(i, 1)].set_facecolor('#ffffff')

plt.suptitle('NVIDIA (NVDA) - Market Analysis Dashboard', fontsize=18, fontweight='bold', y=0.98)
plt.tight_layout(rect=[0, 0, 1, 0.96])

# Save dashboard
plt.savefig('/vercel/sandbox/nvidia_dashboard.png', dpi=300, bbox_inches='tight')
print("Dashboard saved!")

# Create PDF Report
print("Creating PDF report...")
c = canvas.Canvas('/vercel/sandbox/nvidia_report.pdf', pagesize=letter)
width, height = letter

# Title
c.setFont("Helvetica-Bold", 24)
c.drawString(50, height - 50, "NVIDIA Stock Analysis")
c.setFont("Helvetica", 12)
c.drawString(50, height - 75, f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")

# Add dashboard image
img = ImageReader('/vercel/sandbox/nvidia_dashboard.png')
c.drawImage(img, 30, 50, width=550, height=350, preserveAspectRatio=True)

c.save()
print("PDF report created: nvidia_report.pdf")
print("\nKey Insights:")
for k, v in insights.items():
    print(f"  {k}: {v}")
