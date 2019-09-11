//OXs permutations.java

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Solution{
    
    static int N;
    static int current;

    public static void main(String[] args){
        String abc = "heyy";
        System.out.println(abc);
        abc += "asdfasdf";
        System.out.println(abc);
        String oh = "O";
        String ex = "X";
        
        Scanner scanner = new Scanner(System.in);
		N = scanner.nextInt();
        current = 1;
        System.out.println(N);

        System.out.println(power(N));

        ArrayList<ArrayList<String>> graph = new ArrayList<>();
		for(int i = 0; i < N; i++){
			graph.add(new ArrayList<String>());
		}

        System.out.println(graph);
        if(N == 1){
            System.out.println("O");
            System.out.println("X");
        }
        else{
            permute(N, current, 1, oh);
            permute(N, current, 2, oh);
            permute(N, current, 1, ex);
            permute(N, current, 2, ex);
        }

    }

    public static long power(int x){
        int current = 1;
        for(int i = 0; i < x; i++){
            current = current * 2;
        }
        return current;
    }

    public static long permute(int N, int current, int condition, String currentString){
        while(N > current){
            if(condition == 1){
                currentString += "O";
                current += 1;
                permute(N, current, 1, currentString);
                permute(N, current, 2, currentString);
            }
            else{
                currentString += 'X';
                current += 1;
                permute(N, current, 1, currentString);
                permute(N, current, 2, currentString);
            }
        }
        System.out.println(currentString);
        return 0;

    }
}