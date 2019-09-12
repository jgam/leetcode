//kaidan.java

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Solution{
    static int N, M, ret;
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
		N = scanner.nextInt();
        M = scanner.nextInt();
        //input done

        ret = factorialed(N, N-M) / factorialed(M, 0);

        System.out.println(ret);
    }
    public static int factorialed(int input, int end){
        int factorial = 1;
        for(int i = input; i > end; i--){
            factorial = factorial * i;
        }
        return factorial;
    }
}