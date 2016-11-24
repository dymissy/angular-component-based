//component name - component definition object
angular.module("mailApp").component("folderList",{
    templateUrl : "components/folder-list/folder-list.html",
    controller: FolderListController,
    controllerAs: "folderListCtrl",
    
    //they are applied as fields in the controller object
    bindings: {
        folders: '<folders',
        title: '@',
        defaultFolder : "<?",
        onSelect: "&",
        allowCreate: "@",
        onAddNew: "&",
    } 
    
});

function FolderListController()
{
    if (!this.title)
        this.title ="Folder list";
        
    
    this.addFolder = function (newFolderName) {
        this.folders.push(newFolderName);

        this.onAddNew({
            folder: newFolderName
        });
    };
    
    this.select = function (folder)
    {
        //update current folder locally
        this.currentFolder = folder; 

        this.onSelect({
            folder: folder
        });
    };
    
    if (this.defaultFolder)
    {
        this.select(this.defaultFolder);
    }

}

