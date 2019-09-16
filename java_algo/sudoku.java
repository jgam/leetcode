//sudoku.java

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Main{
    static int N;
    static int M;
    public static void main(String[] args){
        ArrayList<ArrayList<Integer>> graph = new ArrayList<>();

        for(int i = 0; i < 9; i++){
            Scanner scanner = new Scanner(System.in);
		    N = scanner.nextInt();
            //for loop needed for 9 numbers
            graph.add(N);
        }


        
    }
}