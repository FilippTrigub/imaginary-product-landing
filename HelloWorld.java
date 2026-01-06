public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");

        System.out.println("Starting a loop...");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Number: " + i);
            if (i % 2 == 0) {
                System.out.println(i + " is even.");
            } else {
                System.out.println(i + " is odd.");
            }
        }
        System.out.println("Loop finished.");
    }
}
