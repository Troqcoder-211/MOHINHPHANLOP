package BackEnd.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Notification_Types")
@Data
public class NotificationType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
}