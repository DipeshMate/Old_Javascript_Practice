import java.util.*;

class Solution11 {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Size:-");
        int k = sc.nextInt();
        int[] arr = new int[k];

        System.out.println("Enter elements:-");
        for (int i = 0; i < k; i++) {
            arr[i] = sc.nextInt();
            System.out.print(arr[i] + " "); // 1 2 3 4 5 6 7 8
        }
        System.out.println("Now Enter element to rotate array");
        int p = sc.nextInt(); // 4
        for (int i = 0; p + i < k; i++) { // k = 8 , p = 4
            System.out.print(arr[p + i] + " ");
        }
        for (int i = 0; i < p; i++) {
            System.out.print(arr[i] + " ");
        }

        sc.close();
    }
}