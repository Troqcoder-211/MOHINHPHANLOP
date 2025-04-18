package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Table(name = "Saved_Items")
@Data
public class SaveItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "collection_id")
    private SavedCollection collection;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    private Timestamp savedAt;
}
