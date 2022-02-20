
import java.io.*;
import java.util.*;
import com.google.common.primitives.Ints;  
import java.time.*;
  
// Importing the ChronoUnit class
import java.time.temporal.ChronoUnit;

class file {
    public static void main(String[] args)
    {

         Scanner input = new Scanner(System.in);
        String str=input.next();

        System.out.print(str);
        
        int st1 =convert(""+str.charAt(0)+str.charAt(1));
         int st2=convert(""+str.charAt(3)+str.charAt(4));
        System.out.print("Enter end time (hh:mm ): "+st1);
        
        System.out.print("Enter end time (hh:mm ): "+st2);

        int et1 =convert(""+str.charAt(8)+str.charAt(9));
        int et2=convert(""+str.charAt(11)+str.charAt(12));
        System.out.print("Enter end time (hh:mm ): "+et1);
        System.out.print("Enter end time (hh:mm ): "+et2);
        // Dates to be parsed
        // String time1 =st ;
        // String time2 = et;
  
        // Parsing Time Period in the format HH:MM:SS
        LocalTime time1 = LocalTime.of(st1,st2, 00);
        LocalTime time2 = LocalTime.of(et1, et2, 00);
  
        // Calculating the difference in Hours
        long hours = ChronoUnit.HOURS.between(time1, time2);
  
        // Calculating the difference in Minutes
        long minutes
            = ChronoUnit.MINUTES.between(time1, time2) % 60;
  
        // Calculating the difference in Seconds
        long seconds
            = ChronoUnit.SECONDS.between(time1, time2) % 60;
  
        // Printing the difference
        System.out.println(
            "Difference is " + hours + " hours " + minutes
            + " minutes " + seconds + " seconds.");
    }
    public static int convert(String str)
    {
        int val = 0;
        System.out.println("String = " + str);
  
        // Convert the String
        val = Optional.ofNullable(str)
                  .map(Ints::tryParse)
                  .orElse(0);
  
        return val;
    }
}