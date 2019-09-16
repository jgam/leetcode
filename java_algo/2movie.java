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

        ret = factorialed(N, N-M, M);

        System.out.println(ret);
    }
    //this is permutations
    public static int factorialed(int input, int end, int division){
        int factorial = 1;
        int start_division = 1;
        boolean second = false;
        //I should find a way to divide large numbers to small numbers before hand.
        for(int i = input; i > end; i--){
            factorial = factorial * i;
            //because the number gets big
            factorial = factorial / start_division;
            if (start_division > division){
                start_division = 1;
                //added condition if second factorial already hit the max
                second = true;
            }
            else{
                if(second){
                    continue;
                }
                else{
                    start_division += 1;
                }
            }

        }
        return factorial;
    }
}