package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Table(name = "Comment_Reactions", uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "comment_id"}))
@Data
public class CommentReaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "comment_id")
    private Comment comment;

    @Enumerated(EnumType.STRING)
    private ReactionType reactionType;

    private Timestamp reactionDate;

    public enum ReactionType {LIKE, LOVE, HAHA, WOW, SAD, ANGRY}
}
