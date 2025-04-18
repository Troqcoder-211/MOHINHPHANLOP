

-- 1. Users (10 bản ghi, password đã băm bcrypt)
INSERT INTO Users (full_name, email, phone_number, password_hash, profile_picture, cover_photo, bio, birthday, gender, is_verified)
VALUES
  ('User 1',  'user1@mail.com',  '0900000001', '$2b$12$o6eQ72McMFliRdbT7IbetOk6e.LevqKL3TzIWF7.ICZB.l3zDqR6W', '/images/users/1.jpg',  '/images/covers/1.jpg',  'Bio 1', '1990-01-01', 'Male',   FALSE),
  ('User 2',  'user2@mail.com',  '0900000002', '$2b$12$U6bLJfl5rFL6q7sAn36hfOmBBUd4IBVXCl1uywv5wS/It1XppfbRu', '/images/users/2.jpg',  '/images/covers/2.jpg',  'Bio 2', '1991-02-02', 'Female', TRUE),
  ('User 3',  'user3@mail.com',  '0900000003', '$2b$12$aspDMCZKY/fDzmcuHR96Iuzj9FqDi.kj56sO2Vz7ve1Y/Q/a7hcHq', '/images/users/3.jpg',  '/images/covers/3.jpg',  'Bio 3', '1992-03-03', 'Other', FALSE),
  ('User 4',  'user4@mail.com',  '0900000004', '$2b$12$FUYhoqdIVxnnNSvETLubfOcoBIYcGD7OIgGvq40awMvwZ0gNUop2y', '/images/users/4.jpg',  '/images/covers/4.jpg',  'Bio 4', '1993-04-04', 'Male',   TRUE),
  ('User 5',  'user5@mail.com',  '0900000005', '$2b$12$VCH2DiMw0Ef.wk2d8ocSP.cGJkH2Mskkrhsq0UuBvMuhpzWqK/mDq', '/images/users/5.jpg',  '/images/covers/5.jpg',  'Bio 5', '1994-05-05', 'Female', FALSE),
  ('User 6',  'user6@mail.com',  '0900000006', '$2b$12$xxM6WgHCtCJdQRGFaWvkdukAEV.TQLlRzM7zYkNPduGLTxgYYQuee', '/images/users/6.jpg',  '/images/covers/6.jpg',  'Bio 6', '1995-06-06', 'Other', TRUE),
  ('User 7',  'user7@mail.com',  '0900000007', '$2b$12$FsLcvfb4ZCesxzKvrui8iOM8Dv3nDKyPsfeRfZFRnz/tRMxdf5NKy', '/images/users/7.jpg',  '/images/covers/7.jpg',  'Bio 7', '1996-07-07', 'Male',   FALSE),
  ('User 8',  'user8@mail.com',  '0900000008', '$2b$12$VNdEYySmEoHnB8sI4VGI2uEC/jtz9gC0dYRUQNckLSRuR1UlR5JHO', '/images/users/8.jpg',  '/images/covers/8.jpg',  'Bio 8', '1997-08-08', 'Female', TRUE),
  ('User 9',  'user9@mail.com',  '0900000009', '$2b$12$hWlChJez9hebMTr.BhwkPOve1.0s9npnEH9mL4nT5MkW9DlJUkkJK', '/images/users/9.jpg',  '/images/covers/9.jpg',  'Bio 9', '1998-09-09', 'Other', FALSE),
  ('User 10', 'user10@mail.com', '0900000010', '$2b$12$PHIqqzZaEfcWLv8UOzpRP.zZ.52hxkAc0KINpl/ekIkauZsjUB6KW', '/images/users/10.jpg', '/images/covers/10.jpg', 'Bio 10','1999-10-10','Male',   TRUE);

-- 2. Posts (10 bản ghi)
INSERT INTO Posts (user_id, content, type, visibility, shared_post_id)
VALUES
 (1,'Post content 1','Text','Public', NULL),
 (2,'Post content 2','Image','Friends',NULL),
 (3,'Post content 3','Video','Private',NULL),
 (4,'Post content 4','Event','Public',NULL),
 (5,'Post content 5','Poll','Friends',NULL),
 (6,'Post content 6','Text','Private',NULL),
 (7,'Post content 7','Image','Public',NULL),
 (8,'Post content 8','Video','Friends',NULL),
 (9,'Post content 9','Event','Private',NULL),
 (10,'Post content 10','Poll','Public',NULL);

-- 3. Post_Media (10 bản ghi)
INSERT INTO Post_Media (post_id, media_url, media_type, caption)
VALUES
 (1, '/uploads/posts/1-media.jpg', 'Image', 'Caption 1'),
 (2, '/uploads/posts/2-media.jpg', 'Video', 'Caption 2'),
 (3, '/uploads/posts/3-media.jpg', 'Image', 'Caption 3'),
 (4, '/uploads/posts/4-media.jpg', 'Video', 'Caption 4'),
 (5, '/uploads/posts/5-media.jpg', 'Image', 'Caption 5'),
 (6, '/uploads/posts/6-media.jpg', 'Video', 'Caption 6'),
 (7, '/uploads/posts/7-media.jpg', 'Image', 'Caption 7'),
 (8, '/uploads/posts/8-media.jpg', 'Video', 'Caption 8'),
 (9, '/uploads/posts/9-media.jpg', 'Image', 'Caption 9'),
 (10,'/uploads/posts/10-media.jpg','Video','Caption 10');

-- 4. Comments (10 bản ghi)
INSERT INTO Comments (post_id, user_id, parent_comment_id, content)
VALUES
 (1, 2, NULL, 'Comment 1'),
 (2, 3, NULL, 'Comment 2'),
 (3, 4, NULL, 'Comment 3'),
 (4, 5, NULL, 'Comment 4'),
 (5, 6, NULL, 'Comment 5'),
 (6, 7, 1,    'Comment 6 (reply)'),
 (7, 8, 2,    'Comment 7 (reply)'),
 (8, 9, 3,    'Comment 8 (reply)'),
 (9,10, 4,    'Comment 9 (reply)'),
 (10,1, 5,    'Comment 10 (reply)');

-- 5. Post_Reactions (10 bản ghi)
INSERT INTO Post_Reactions (user_id, post_id, reaction_type)
VALUES
 (1,1,'Like'),
 (2,2,'Love'),
 (3,3,'Haha'),
 (4,4,'Wow'),
 (5,5,'Sad'),
 (6,6,'Angry'),
 (7,7,'Like'),
 (8,8,'Love'),
 (9,9,'Haha'),
 (10,10,'Wow');

-- 6. Comment_Reactions (10 bản ghi)
INSERT INTO Comment_Reactions (user_id, comment_id, reaction_type)
VALUES
 (1,1,'Like'),
 (2,2,'Love'),
 (3,3,'Haha'),
 (4,4,'Wow'),
 (5,5,'Sad'),
 (6,6,'Angry'),
 (7,7,'Like'),
 (8,8,'Love'),
 (9,9,'Haha'),
 (10,10,'Wow');

-- 7. Friends (10 bản ghi)
INSERT INTO Friends (user_id, friend_id, status)
VALUES
 (1,2,'Accepted'),
 (2,3,'Pending'),
 (3,4,'Rejected'),
 (4,5,'Blocked'),
 (5,6,'Removed'),
 (6,7,'Accepted'),
 (7,8,'Pending'),
 (8,9,'Rejected'),
 (9,10,'Blocked'),
 (10,1,'Removed');

-- 8. Blocked_Users (10 bản ghi)
INSERT INTO Blocked_Users (blocker_id, blocked_id)
VALUES
 (2,1),
 (3,2),
 (4,3),
 (5,4),
 (6,5),
 (7,6),
 (8,7),
 (9,8),
 (10,9),
 (1,10);

-- 9. Groups (10 bản ghi)
INSERT INTO `Groups` (name, description, owner_id, privacy)
VALUES
 ('Group 1','Desc 1',1,'Public'),
 ('Group 2','Desc 2',2,'Private'),
 ('Group 3','Desc 3',3,'Public'),
 ('Group 4','Desc 4',4,'Private'),
 ('Group 5','Desc 5',5,'Public'),
 ('Group 6','Desc 6',6,'Private'),
 ('Group 7','Desc 7',7,'Public'),
 ('Group 8','Desc 8',8,'Private'),
 ('Group 9','Desc 9',9,'Public'),
 ('Group 10','Desc 10',10,'Private');

-- 10. Group_Members (10 bản ghi)
INSERT INTO Group_Members (group_id, user_id, role)
VALUES
 (1,2,'Member'),
 (2,3,'Moderator'),
 (3,4,'Admin'),
 (4,5,'Member'),
 (5,6,'Moderator'),
 (6,7,'Admin'),
 (7,8,'Member'),
 (8,9,'Moderator'),
 (9,10,'Admin'),
 (10,1,'Member');

-- 11. Follows (10 bản ghi)
INSERT INTO Follows (follower_id, following_id, following_type)
VALUES
 (1,2,'User'),
 (2,3,'User'),
 (3,4,'Group'),
 (4,5,'Group'),
 (5,6,'User'),
 (6,7,'User'),
 (7,8,'Group'),
 (8,9,'Group'),
 (9,10,'User'),
 (10,1,'User');

-- 12. Saved_Collections (10 bản ghi)
INSERT INTO Saved_Collections (user_id, name)
VALUES
 (1,'Collection 1'),
 (2,'Collection 2'),
 (3,'Collection 3'),
 (4,'Collection 4'),
 (5,'Collection 5'),
 (6,'Collection 6'),
 (7,'Collection 7'),
 (8,'Collection 8'),
 (9,'Collection 9'),
 (10,'Collection 10');

-- 13. Saved_Items (10 bản ghi)
INSERT INTO Saved_Items (collection_id, post_id)
VALUES
 (1,1),
 (2,2),
 (3,3),
 (4,4),
 (5,5),
 (6,6),
 (7,7),
 (8,8),
 (9,9),
 (10,10);

-- 14. Notification_Types (10 bản ghi)
INSERT INTO Notification_Types (name)
VALUES
 ('Type 1'),
 ('Type 2'),
 ('Type 3'),
 ('Type 4'),
 ('Type 5'),
 ('Type 6'),
 ('Type 7'),
 ('Type 8'),
 ('Type 9'),
 ('Type 10');

-- 15. Notifications (10 bản ghi)
INSERT INTO Notifications (user_id, notification_type_id, message)
VALUES
 (1,1,'Notification 1'),
 (2,2,'Notification 2'),
 (3,3,'Notification 3'),
 (4,4,'Notification 4'),
 (5,5,'Notification 5'),
 (6,6,'Notification 6'),
 (7,7,'Notification 7'),
 (8,8,'Notification 8'),
 (9,9,'Notification 9'),
 (10,10,'Notification 10');
