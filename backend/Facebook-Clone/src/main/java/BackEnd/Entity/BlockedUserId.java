package BackEnd.Entity;

import lombok.Data;

import java.io.Serializable;

@Data
// BlockedUserId (Composite key)
public class BlockedUserId implements Serializable {
    private Integer blockerId;
    private Integer blockedId;
}
