import java.util.*;
public class Title_Case {
    public static void main(String[] args) {
        String s = "hello world from java";
        String[] words = s.split(" ");
        StringBuilder sb = new StringBuilder();
        for (String w : words) {
            sb.append(Character.toUpperCase(w.charAt(0))).append(w.substring(1)).append(" ");
        }
        System.out.println(sb.toString().trim());
    }
}
