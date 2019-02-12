from faker import Faker

function tableGenerate() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  var tr = document.createElement('tr');
  for (var i = 0; i <= 50; i++) {
        var td = document.createElement('td');
	$("tbdy").text(faker.name.findName());
	$("tbdy").text(faker.internet.email());
	$("tbdy").text(faker.random.number(1,99));
	$("tbdy").text(faker.adress.city());
 	tr.appendChild(td);


      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate();
