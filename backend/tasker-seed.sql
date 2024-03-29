-- Fake user data -- all test users have the password "password"
INSERT INTO "users" ("password", "phone", "first_name", "last_name", "email", "is_worker", "is_admin")
VALUES
  ( 
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '1234567890', 
  'Ted', 
  'Lasso', 
  'user1@example.com', 
  false,
  false),
  ( 
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '9876543210', 
  'Coach', 
  'Beard', 
  'user2@example.com', 
  true,
  false),
  ( 
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '4444444444', 
  'Jamie', 
  'Tartt', 
  'user3@example.com', 
  true,
  false),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '5555555555', 
  'Roy', 
  'Kent', 
  'user4@example.com', 
  false,
  true),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '9999999999', 
  'Rebecca', 
  'Welton', 
  'user5@example.com', 
  false,
  true),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '1111111111', 
  'Nathan', 
  'Shelley', 
  'user6@example.com', 
  true,
  false),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '2222222222', 
  'Keeley', 
  'Jones', 
  'user7@example.com', 
  false,
  false),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '3333333333', 
  'Sam', 
  'Obisanya', 
  'user8@example.com', 
  true,
  false),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '8888888888', 
  'Higgins', 
  'Hunt', 
  'user9@example.com', 
  true,
  true),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '2222222222', 
  'AFC', 
  'Richmond', 
  'user10@example.com', 
  false,
  false),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '7772228888', 
  'Kenny', 
  'McDonald', 
  'user11@example.com', 
  true,
  false),
  (
  '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 
  '3338885555', 
  'Colin', 
  'Hues', 
  'user12@example.com', 
  false,
  false);

-- Fake job data
INSERT INTO "jobs" ("title", "body", "status", "address", "posted_by", "assigned_to", "start_time", "end_time", "payment_due", "before_image_url", "after_image_url")
VALUES
  ('Gardening', 'Need help with gardening tasks', 'pending', '123 Main St', 4, NULL, NULL, NULL, NULL, '', ''),
  ('House Cleaning', 'Cleaning required for a 3-bedroom house', 'pending', '456 Elm St', 1, 3, '2023-06-01 09:00:00', NULL, NULL, '', ''),
  ('Painting', 'Interior painting for a small apartment', 'pending', '789 Oak St', 7, 3, '2023-06-02 10:00:00', '2023-06-02 15:00:00', 125, '', ''),
  ('Dog Walking', 'Need someone to walk my dog twice a day', 'pending', '321 Maple Ave', 10, NULL, NULL, NULL, NULL, '', ''),
  ('Furniture Assembly', 'Assembly required for new furniture', 'pending', '987 Pine St', 12, 4, '2023-06-03 14:00:00', '2023-06-03 17:00:00', 75, '', ''),
  ('Plumbing Repair', 'Fix a leaky faucet in the kitchen', 'pending', '567 Walnut St', 1, 3, '2023-06-04 11:00:00', '2023-06-04 12:30:00', NULL, '', ''),
  ('Lawn Mowing', 'Mow the lawn and trim the hedges', 'pending', '234 Oakwood Dr', 5, 6, '2023-06-05 09:00:00', '2023-06-05 11:00:00', 50, '', ''),
  ('House Painting', 'Exterior painting for a two-story house', 'pending', '456 Birch Ln', 12, 11, '2023-06-06 08:00:00', NULL, NULL, '', ''),
  ('Electrical Repair', 'Fix a faulty electrical outlet in the living room', 'pending', '789 Cedar Rd', 4, NULL, NULL, NULL, NULL, '', ''),
  ('Moving Assistance', 'Help with packing and moving furniture', 'pending', '123 Elmwood Ave', 1, 3, '2023-06-07 10:00:00', '2023-06-07 14:00:00', 80, '', ''),
  ('Carpet Cleaning', 'Deep cleaning for carpets in a large office space', 'pending', '567 Willow Way', 10, NULL, NULL, NULL, NULL, '', ''),
  ('Appliance Installation', 'Install a new dishwasher in the kitchen', 'pending', '890 Pinecone Rd', 7, 11, '2023-06-08 13:00:00', NULL, NULL, '', '');

-- Fake conversation data
INSERT INTO "conversations" ("id", "created_at")
VALUES 
  ('u1u2', '2023-06-03 10:00:00'),
  ('u1u3', '2023-06-05 09:30:00');

-- Fake message data
INSERT INTO "messages" ("body", "conversation_id", "sent_by", "sent_to", "created_at")
VALUES
  ('Hi, I''m interested in your job posting.', 'u1u2', 2, 1, '2023-06-03 10:00:00'),
  ('Sure, I can help you with that.', 'u1u2', 1, 2, '2023-06-03 11:00:00'),
  ('When do you need the job to be done?', 'u1u2', 2, 1, '2023-06-04 15:30:00'),
  ('I can start the job next week. Is that fine?', 'u1u2', 2, 1, '2023-06-04 16:00:00'),
  ('I have some previous experience in similar tasks.', 'u1u3', 3, 1, '2023-06-05 09:30:00'),
  ('Can you provide the necessary tools for the job?', 'u1u3', 3, 1, '2023-06-05 10:00:00'),
  ('Yes, I can provide the necessary tools.', 'u1u3', 1, 3, '2023-06-05 10:30:00'),
  ('That is great! Thank you.', 'u1u2', 1, 2, '2023-06-05 11:00:00'),
  ('By the way, do you have any specific preferences for the job?', 'u1u2', 2, 1, '2023-06-05 12:30:00'),
  ('I prefer using eco-friendly cleaning products.', 'u1u2', 1, 2, '2023-06-05 13:00:00'),
  ('Noted. I will make sure to use eco-friendly products.', 'u1u2', 2, 1, '2023-06-05 14:30:00'),
  ('That sounds good. Looking forward to working with you!', 'u1u3', 3, 1, '2023-06-05 15:00:00');

-- Fake application data
INSERT INTO "applications" ("applied_by", "applied_to")
VALUES
  (2, 1),
  (3, 9),
  (3, 4),
  (3, 11),
  (6, 11),
  (6, 1),
  (6, 4),
  (8, 11),
  (8, 9),
  (8, 4);

-- Fake payout data
INSERT INTO "payouts" ("trans_to", "trans_by", "subtotal", "tax", "tip", "total", "created_at")
VALUES
  (1, 3, 375.00, 30.00, 30.00, 435.00, '2023-05-15 10:00:00'),
  (5, 6, 375.00, 30.00, 30.00, 435.00, '2023-05-15 10:00:00'),
  (7, 3, 375.00, 30.00, 30.00, 435.00, '2023-05-31 10:00:00');