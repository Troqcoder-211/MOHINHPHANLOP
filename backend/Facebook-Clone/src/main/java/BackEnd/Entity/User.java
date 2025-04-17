package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
@Table(name = "Users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String fullName;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true)
    private String phoneNumber;

    private String passwordHash;

    private String profilePicture;

    private String coverPhoto;

    private String bio;

    private LocalDate birthday;

    @Enumerated(EnumType.STRING)

    private Gender gender;

    private Boolean isVerified = false;

    @Enumerated(EnumType.STRING)

    private UserStatus status = UserStatus.ACTIVE;

    private Timestamp lastLogin;

    private Timestamp createdAt;

    private Timestamp updatedAt;

    public enum Gender {MALE, FEMALE, OTHER}

    public enum UserStatus {ACTIVE, DEACTIVATED, BANNED}
}
