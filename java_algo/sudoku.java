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
        
        for(int i = 0; i < 9; i++){
            Scanner scanner = new Scanner(System.in);
            
            for(int j = 0; j < 9; j++){
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
        ArrayList<Integer> temp = new ArrayList<>();
        for(int i = 0; i< 9; i++){
            temp.add(i)
        }
        //we need missing numbers and fill them randomly 

    }
    //takes in a list of list of integers
    public static boolean horizontal(int[][] v){
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
    
    //takes in a list of list of integers
    public static boolean vertical(int[][] v){
        // check vertical
        int nums[][];
        nums = new int[9][9];

        for(int i = 0; i < 9; i ++){
            for(int j = 0; j < 9; j++){
                nums[j][i]= v[i][j];
            }
        }

        if(horizontal(nums)){
            System.out.println("vertical function working fine");
            return true;
        }
        return false;
    }

    public static boolean threebythree(int[][] v){
        //check three by three
        for(int i = 0; i < 3; i++){
            int index = i * 3;
            for(int j = 0; j < 9; j+=3){
                int sum;
                sum = v[index][j]+v[index+1][j]+v[index+2][j]+v[index][j+1] + v[index+1][j+1] + v[index+2][j+1] + v[index][j+2] + v[index+1][j+2] + v[index+2][j+2];
                if(sum != 45){
                    return false;
                }
            }
        }
        return true;
        


    }
}