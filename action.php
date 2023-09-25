<?php
class Action{
        private $name = "";
        public function __construct($name){
        $this->name = $name;
        }

        public function accelerate(){
        echo $this->name." is accelerating..";
        }

        public function stop(){
        echo $this->name." is breaking...";
        }

}

?>
