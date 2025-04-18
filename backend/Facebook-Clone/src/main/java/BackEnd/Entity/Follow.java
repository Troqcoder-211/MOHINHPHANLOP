package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Table(name = "Follows")
@Data
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "follower_id")
    private User follower;

    private Integer followingId;

    @Enumerated(EnumType.STRING)
    private FollowingType followingType;

    private Boolean isActive;

    private Timestamp createdAt;

    public enum FollowingType {USER, PAGE, GROUP}
}