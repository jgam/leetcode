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
            ArrayList <Integer> arl = new ArrayList<Integer>();
            Scanner scanner = new Scanner(System.in);
            for(int j = 0; j < 9; j++){
                arl.add(scanner.nextInt());
            }
            System.out.println(arl);
            //here I should come up with vertical, horizontal, 3 square.
            //horizontal done.
            graph.add(arl);
        }

        System.out.println(graph);


        
    }
}