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
        
        System.out.println(factorialed(N));
        //input done

        ret = factorialed(N) / factorialed(N-M) / factorialed(M);

        System.out.println(ret);
    }
    public static int factorialed(int input){
        int factorial = 1;
        for(int i = 1; i <= input; i++){
            factorial = factorial * i;
        }
        return factorial;
    }
}