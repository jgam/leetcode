//topological sort

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Solution{

	static int N;
	static int M;

	public static void main(String[] args){
		Scanner scanner = new Scanner(System.in);
		N = scanner.nextInt();//6
		M = scanner.nextInt();//8

		int[] cntOfLink = new int[N];


		//graph with no weights
		ArrayList<ArrayList<Integer>> graph = new ArrayList<>();// [[2],[3,4],[4,6],[],[],[]]
		for(int i = 0; i < N; i++){
			graph.add(new ArrayList<Integer>());
		}
		System.out.println(graph);

		int previous = 0;
		int index = -1;
		
		// graph has all the next nodes in certain indexes
		//cntofLink has directions towards its indexes.
		for(int i = 0; i < M; i++){
			int v1 = scanner.nextInt();
			int v2 = scanner.nextInt();

			graph.get(v1-1).add(v2);
			cntOfLink[v1-1]++;
		}

		System.out.println(graph);//[[2,3],[3],[4,6]..]
		System.out.println(cntOfLink);//[0,1,2,2,1...]
		LinkedList<Integer> Queue = new LinkedList<Integer>();//[1,2,3..]

		for(int i = 0; i<N;i++){
			if(cntOfLink[i]==0){
				Queue.add(i+1);//[1,2]=> [[2,3],[3]..]
			}
		}

		ArrayList<Integer> returnList = new ArrayList<Integer>();//for loop element system.out.println

		//Queue empty size
		while(!Queue.isEmpty()){
			int currentNode = Queue.poll();// 1
			returnList.add(currentNode);//[1,....3,2,4]
			for(int i = 0; i< graph.get(currentNode).size(); i++){// =>[[2],[3,4,5]]
				int getNode = graph.get(currentNode).get(i);
				cntOfLink[getNode]--;//[0,2] => [0,1...]
				if(cntOfLink[getNode]==0){
					Queue.add(getNode);
				}
			}

		}

		//=> Queue = [1,2,3,5,4,6] => [], returnList = [1,2,4,3,5,6]
		//for loop print element in returnList.

	};

}