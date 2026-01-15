// Hello World in Java
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");

        // With additional formatting
        System.out.println("========================================");
        System.out.println("  Java Hello World");
        System.out.println("========================================");

        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("Executed at: " + now.format(formatter));
    }
}
