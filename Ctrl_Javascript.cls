public class Ctrl_Javascript {
    public string parameter1{get;set;}
    public string parameter2{get;set;}
    public string parameter3{get;set;}
    public string parameter4{get;set;}
    
    public void ActionCall(){
        system.debug('#parameter1 '+parameter1);
        system.debug('#parameter2 '+parameter2);
        system.debug('#parameter3 '+parameter3);
    }
}