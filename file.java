import java.util.*;
public class Main{ 
  
public static int convertStringToInteger(String s) 
{ 
      
    int n = 0; 
    int size = s.length(); 
  
     for(int i = 0; i < size; i++) 
  
 
        n = n * 10 + ((int)s.charAt(i) - 48); 
  

   return n;
} 
public static boolean larger_than(String s1,String s2){
 int num1= convertStringToInteger(s1);
   int num2= convertStringToInteger(s2);
   if(num1>num2){
       return true;
   }else{
       return false;
   } 
}
public static void main(String[] args) 
{ 
Scanner scn=new Scanner(System.in);
String s1=scn.next();
String s2=scn.next();
boolean ans=larger_than(s1,s2);
  System.out.println(ans);
} 
} 