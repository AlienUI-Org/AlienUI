variable "region" {
  default = "eu-west-1"
}

variable "instance_type" {
  default = "c7i-flex.large"
}

variable "key_name" {
  description = "Existing AWS key pair name"
}

variable "security_group_id" {
  description = "Existing Security Group ID to reuse"
}
