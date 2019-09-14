//binary.java

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Main{

	static int N;
	
	public static void main(String [] args){
		Scanner scanner = new Scanner(System.in);
		N = scanner.nextInt();//6
		int ret = 1;

		for(int i = 0; i < N; i++){
			ret *= 2;
		}
		//00 01 10 11
		//000  001 100 
		//0000 0001 0010 0100 1000 1001 1100

		System.out.println(ret);
	}
}