resource "aws_instance" "this" {
  ami                    = "ami-03446a3af42c5e74e"
  instance_type          = var.instance_type
  key_name               = var.key_name
  vpc_security_group_ids = [var.security_group_id]

  tags = {
    Name = var.name
  }
}
