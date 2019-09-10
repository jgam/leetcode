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

        ArrayList<ArrayList<String>> graph = new ArrayList<>();
		for(int i = 0; i < N; i++){
			graph.add(new ArrayList<String>());
		}

        System.out.println(graph);

        for(int i = 0; i < N; i++){
            //here call recursively.
        }

    }

    public static long power(int x){
        int current = 1;
        for(int i = 0; i < x; i++){
            current = current * 2;
        }
        return current;
    }

    public static long permute(){
        return 0;

    }
}