package application;

import db.DB;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class InsertDepartmentSimpleWay {

    public static void main(String[] args) {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = DB.getConnection();

            ps = conn.prepareStatement(
                    "insert into department (Name) values ('Depart01'),('Depart02')",
                    Statement.RETURN_GENERATED_KEYS);

            int rows = ps.executeUpdate();
            if (rows > 0) {
                ResultSet rs = ps.getGeneratedKeys();
                while (rs.next()) {
                    int id = rs.getInt(1);
                    System.out.println("Done! Id = " + id);
                }
            } else {
                System.out.println("No rows affected!");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            DB.closeStatment(ps);
            DB.closeConnection();
        }
    }
}
