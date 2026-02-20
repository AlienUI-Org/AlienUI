provider "aws" {
  region = var.region
}

module "ec2" {
  source            = "./modules/ec2"
  instance_type     = var.instance_type
  key_name          = var.key_name
  security_group_id = var.security_group_id
  name              = "alienui-server"
}
