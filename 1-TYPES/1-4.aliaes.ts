{
    /**
     * Type Aliases
     * 
     */

     type Text = string;
     const name: Text = 'goodjwon';
     const address: Text = 'korea';
     type Num = number;
     type Student = {
         name: string,
         age: number
     }

     const student: Student ={
         name: 'goodjwon',
         age: 14
     }

     /**
      * String Literal Types
      */
     type Name = 'name';
     let goodjwonName: Name;
     goodjwonName = 'name';

     type JSON = 'json'
     const json:JSON = 'json'

     type Boal =true;
     const isCat: Boal = true;
     
}