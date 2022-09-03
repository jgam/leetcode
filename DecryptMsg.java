import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



class Result {

    /*
     * Complete the 'decryptMessage' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING encryptedMessage as parameter.
     */
    public static String convertStr(String inputStr){
        String answer = new String();
        Character currentChar = new Character('\u0000');
        Integer counter = 0;
        
        for(int i = 0; i < inputStr.length(); i++){
            if(inputStr.charAt(i) == currentChar){
                counter += 1;
            }else{
                if(counter > 1){
                    answer += String.valueOf(counter);
                }
                counter = 1;
                currentChar = inputStr.charAt(i);
                //add to answer
                answer += inputStr.charAt(i);
            }
        }
        return answer;
    }

    public static String decryptMessage(String encryptedMessage) {
        //split string by " "
        //tring[] splited = str.split("\\s+");
        String[] newArray = encryptedMessage.split(" ");
        String answer = new String();
        // reverse
        // convert each string
        for(int i = newArray.length-1; i > -1; i--){
            if(i == 0){
                answer += convertStr(newArray[i]);
            }else{
                answer += convertStr(newArray[i])+' ';
            }
        }
        
        return answer;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String encryptedMessage = bufferedReader.readLine();

        String result = Result.decryptMessage(encryptedMessage);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
