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

        permute(N, current, 1, "O");
        permute(N, current, 2, "X");

    }

    public static long power(int x){
        int current = 1;
        for(int i = 0; i < x; i++){
            current = current * 2;
        }
        return current;
    }

    public static long permute(int N, int current, int condition, char currentString){
        while(N >= current){
            if(condition == 1){
                currentString += 'O';
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
        System.out.print(currentString);
        return 0;

    }
}