//sudoku.java

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Main{
    static int N;
    static int M;
    static int nums[][];
    
    public static void main(String[] args){

        nums = new int[9][9];
        
        for(int i = 0; i < 2; i++){
            Scanner scanner = new Scanner(System.in);
            
            for(int j = 0; j < 2; j++){
                nums[i][j] = scanner.nextInt();
            }
            System.out.println(nums);
            System.out.println(nums instanceof int[][]);
            //here I should come up with vertical, horizontal, 3 square.
            //horizontal done.
        }

        System.out.println("done");
        fillin(nums);


        
    }
    public static void fillin(int[][] v){
        //here fill in the numbers in v
        int sum = 0;
        sum = v[0][0] + v[1][1];
        System.out.println(sum);

        //we need missing numbers and fill them randomly 

    }
    //takes in a list of list of integers
    public static boolean horizontal(ArrayList v){
        // check horizontal
        double sum = 0;
        ArrayList<Integer> temp = new ArrayList<Integer>();
        for(int i = 0; i < 2; i++){
            //temp = v.get(i);
            for(int j = 0; j<2; j++){
                System.out.println(v.get(i));
                //System.out.println(v.get(i).get(j));

                //sum += v.get(i).get(j);
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
    
    //takes in a list of list of integers
    public static boolean vertical(ArrayList v){
        // check vertical
        int nums[][];
        nums = new int[9][9];

        for(int i = 0; i < 9; i ++){
            for(int j = 0; j < 9; j++){
                nums[i][j]= 3;
                System.out.println(nums[i][j]);
            }
        }
/*
        if(horizontal(nums)){//new_graph)){
            System.out.println("vertical function working fine");
            return true;
        }
*/
        return false;
    }

    public static boolean threebythree(ArrayList v){
        //check three by three
        ArrayList<ArrayList<Integer>> new_graph = new ArrayList<>();

        return true;
        


    }
}