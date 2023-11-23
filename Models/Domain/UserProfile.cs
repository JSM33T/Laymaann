﻿using System.ComponentModel.DataAnnotations;

namespace almondCove.Models.Domain
{
    public class UserProfile
    {
        [Required]
        public int Id { get; internal set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required]
        public string UserName { get; set; }
        public string EMail { get; set; }
        public string Phone { get; set; }
        public string Gender { get; set; }
        public int AvatarId { get; set; }
        public string Bio { get; set; }
        public DateTime DateJoined { get; set; }
        public string DateElement { get; set; }
        public DateTime DateEdited { get; set; }
        public string Role { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string AvatarImg { get; set; }
        public string Badges { get; internal set; }
    }
}
