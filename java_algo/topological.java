import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;

public class Solution{

	static int N;
	static int M;

	public static void main(String[] args){
		Scanner scanner = new Scanner(System.in);
		N = scanner.nextInt();
		M = scanner.nextInt();

		int[] cntOfLink = new int[N];


		//graph with no weights
		ArrayList<ArrayList<Integer>> graph = new ArrayList<>();
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

		System.out.println(graph);
		System.out.println(cntOfLink);
		LinkedList<Integer> Queue = new LinkedList<Integer>();

		for(int i = 0; i<N;i++){
			if(cntOfLink[i]==0){
				Queue.add(i+1);
			}
		}

		ArrayList<Integer> returnList = new ArrayList<Integer>();

		//Queue empty size
		while(!Queue.isEmpty()){
			int currentNode = Queue.poll();
			returnList.add(currentNode);
			for(int i = 0; i< graph.get(currentNode).size(); i++){
				int getNode = graph.get(currentNode).get(i);
				cntOfLink[getNode]--;
				if(cntOfLink[getNode]==0){
					Queue.add(getNode);
				}
			}

		}

	};

}