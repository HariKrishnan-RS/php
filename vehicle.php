<?php
include "action.php";
class Vehicle{
	private $color = "";
	private $model = "";
	private $name = "";
	public function __construct($color,$model,$name){
	$this->color = $color;
	$this->model = $model;
	$this->name = $name;
	}

	public function display(){
	echo "name  is ".$this->name;
	echo "</br>model is ".$this->model;
	echo "</br>color is ".$this->color;
	}
	public function action(){
		$obj = new Action($this->name);
		echo "</br>";
		$obj->stop();
	}

}

$car = new Vehicle("Red","Sedan","HONDA");
$car->display();
$car->action();
$car->action();

?>
