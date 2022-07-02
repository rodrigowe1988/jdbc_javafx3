package application;

import db.DB;

import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Program {

    public static void main(String[] args) {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = DB.getConnection();
            ps = conn.prepareStatement(
                    "UPDATE seller " + "SET BaseSalary =  BaseSalary + ? "
                    + "WHERE "
                    + "(DepartmentId = ?)",
                    Statement.RETURN_GENERATED_KEYS);

            ps.setDouble(1, 200.0);
            ps.setInt(2, 2);

            int rowsAffected = ps.executeUpdate();
            System.out.println("Done! Rows affected: " + rowsAffected);

            } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            DB.closeStatment(ps);
            DB.closeConnection();
        }
    }
}
