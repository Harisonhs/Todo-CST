using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
namespace todo_react.Model;
public class MyTasks
{
    public int Id { get; set; }
    public bool IsImportant { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }

    public override string ToString(){
        return $"Title: {Title}. Description: {Description?.Substring(0, Description.Length > 15? 15:Description.Length)}... IsImportant: {IsImportant}";
    }
}