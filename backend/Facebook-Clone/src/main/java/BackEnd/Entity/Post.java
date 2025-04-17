package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Table(name = "Posts")
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String content;

    @Enumerated(EnumType.STRING)
    private PostType type;

    @Enumerated(EnumType.STRING)
    private PostVisibility visibility;

    @ManyToOne
    @JoinColumn(name = "shared_post_id")
    private Post sharedPost;

    private Timestamp createdAt;

    private Timestamp updatedAt;

    public enum PostType {TEXT, IMAGE, VIDEO, EVENT, POLL}

    public enum PostVisibility {PUBLIC, FRIENDS, PRIVATE}
}
