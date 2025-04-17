package BackEnd.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.Data;

import java.sql.Timestamp;

@Entity
@Table(name = "Blocked_Users")
@Data
@IdClass(BlockedUserId.class)
public class BlockedUser {
    @Id
    private Integer blockerId;

    @Id
    private Integer blockedId;

    private Timestamp blockedAt;
}