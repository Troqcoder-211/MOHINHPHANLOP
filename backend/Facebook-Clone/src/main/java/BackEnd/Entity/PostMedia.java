package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Post_Media")
@Data
public class PostMedia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    private String mediaUrl;

    @Enumerated(EnumType.STRING)
    private MediaType mediaType;

    private String caption;

    public enum MediaType { IMAGE, VIDEO }
}
