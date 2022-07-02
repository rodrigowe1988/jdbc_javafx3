package application;

import db.DB;
import db.DbIntegrityException;

import java.sql.*;
import java.text.SimpleDateFormat;

public class Program {

    public static void main(String[] args) {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Connection conn = null;
        PreparedStatement ps = null;

        try {
            conn = DB.getConnection();
            ps = conn.prepareStatement(
                    "DELETE FROM department "
                    + "WHERE "
                    + "Id = ?");

            ps.setInt(1, 2);

            int rowsAffected = ps.executeUpdate();
            System.out.println("Done! Rows affected: " + rowsAffected);

            } catch (SQLException e) {
                throw new DbIntegrityException(e.getMessage());
        }
        finally {
            DB.closeStatment(ps);
            DB.closeConnection();
        }
    }
}
