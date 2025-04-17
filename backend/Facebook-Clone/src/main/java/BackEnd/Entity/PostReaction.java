package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Table(name = "Post_Reactions", uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "post_id"}))
@Data
public class PostReaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @Enumerated(EnumType.STRING)

    private ReactionType reactionType;

    private Timestamp reactionDate;

    public enum ReactionType {LIKE, LOVE, HAHA, WOW, SAD, ANGRY}
}
