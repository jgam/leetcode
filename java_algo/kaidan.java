//kaidan.java

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Main{

    static int N;
    static int cnt = 0;

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
		N = scanner.nextInt();
        //System.out.println(N); get the input!


        System.out.println(cnt);

        cnt = kaidan(N);

        System.out.println(cnt);


    }

    public static int kaidan(int N){
        if(N == 1){
            return 1;
        }
        else if(N == 2){
            return 1 + kaidan(N-1);
        }
        else if(N ==3){
            return 1 + kaidan(N-1) + kaidan(N-2);
        }
        else{
            //here is above 3
            return kaidanThree(N-3) + kaidan(N-1) + kaidan(N-2);
        }

    }

    public static int kaidanThree(int N){
        //here we input three so we can't put 1 or 2.
        //11
        //12
        //21
        //22
        if(N==1){
            return 1;
        }
        else if(N==2){
            return 2;
        }
        else if(N ==3){
            return 3;
        }
        else if(N==4){
            return 5;//1111 112 121 211 22
        }
        else{
            return kaidan(N-2)+kaidan(N-3)+kaidan(N-3)+kaidan(N-4);
        }
    }
}

//5
//11111
//1112
//1121
//1211
//122
//2111
//212
//221
//113
//131
//311
//23
//32