//OXs permutations.java

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Solution{
    
    static int N;

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
		N = scanner.nextInt();

        System.out.println(N);

        System.out.println(power(N));


    }

    public static long power(int x){
        int current = 1;
        for(int i = 0; i < x; i++){
            current = current * 2;
        }
        return current;
    }
}