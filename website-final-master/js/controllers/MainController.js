app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'ET710Tube';
  $scope.promo = 'A little like YouTube';
  $scope.products = [
    {
  title: 'As Seen On TV TOOLS Tested! (TAC Tool, Pocket Chainsaw, MagnoGrip)',
  publisher: 'Household Hacker',
  pubdate: new Date('2014', '03', '08'),
  publisherURL: 'https://www.youtube.com/user/HouseholdHacker',
  videoURL: 'https://youtu.be/UKBO-CumhrM',
  cover: 'https://i.ytimg.com/vi/UKBO-CumhrM/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCxtDmEGVFjurZZ7NjKiVC9HHTgZw',
  views: 643000,
  },
  {
title: 'As Seen On TV TOOLS Tested! (TAC Tool, Pocket Chainsaw, MagnoGrip)',
publisher: 'Household Hacker',
pubdate: new Date('2014', '03', '08'),
publisherURL: 'https://www.youtube.com/user/HouseholdHacker',
videoURL: 'https://youtu.be/UKBO-CumhrM',
cover: 'https://i.ytimg.com/vi/UKBO-CumhrM/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCxtDmEGVFjurZZ7NjKiVC9HHTgZw',
views: 643000,
},
{
title: 'As Seen On TV TOOLS Tested! (TAC Tool, Pocket Chainsaw, MagnoGrip)',
publisher: 'Household Hacker',
pubdate: new Date('2014', '03', '08'),
publisherURL: 'https://www.youtube.com/user/HouseholdHacker',
videoURL: 'https://youtu.be/UKBO-CumhrM',
cover: 'https://i.ytimg.com/vi/UKBO-CumhrM/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCxtDmEGVFjurZZ7NjKiVC9HHTgZw',
views: 643000,
},
{
title: 'As Seen On TV TOOLS Tested! (TAC Tool, Pocket Chainsaw, MagnoGrip)',
publisher: 'Household Hacker',
pubdate: new Date('2014', '03', '08'),
publisherURL: 'https://www.youtube.com/user/HouseholdHacker',
videoURL: 'https://youtu.be/UKBO-CumhrM',
cover: 'https://i.ytimg.com/vi/UKBO-CumhrM/hqdefault.jpg?sqp=-oaymwEiCNIBEHZIWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCxtDmEGVFjurZZ7NjKiVC9HHTgZw',
views: 643000,
}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
