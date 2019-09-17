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
    public static void fillin(ArrayList v){
        //here fill in the numbers in v

        //we need missing numbers and fill them randomly 

    }

    public static boolean horizontal(ArrayList v){
        // check horizontal
        double sum = 0;
        for(int i = 0; i < 9; i++){
            for(int j = 0; j<9; j++){
                sum += v[i][j];
            }
            if(sum != 45){
                return false;
            }
            else{
                sum = 0;
            }
        }
        return true;
    }

    public static boolean vertical(ArrayList v){
        // check vertical
    }

    public static boolean threebythree(ArrayList v){
        //check three by three

    }
}