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
        ret = N;

        //input done

        for(int i = 1; i < N; i ++){
            ret = i * ret;
        }
        for(int i = 1; i <= N-M; i++){
            ret = ret / i;
        }

        for(int i = 1; i <= M; i++){
            ret = ret / i;
        }

        System.out.println(ret);
    }
}