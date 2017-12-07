/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var des1= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus elit, nec aliquam nisl dignissim porta. Aliquam leo nibh, tempor eu orci in, pulvinar volutpat felis. Pellentesque elementum ipsum mauris, in tempus elit sodales sit amet. Phasellus orci dolor, tempus at nisi quis, interdum luctus odio. Duis consequat auctor eleifend. Pellentesque tincidunt pellentesque tortor sit amet tincidunt. In aliquam nulla vel blandit bibendum. Curabitur non felis elit. Fusce vel rutrum purus, non consectetur turpis. Suspendisse vel bibendum diam. Pellentesque id erat volutpat, dapibus lacus eget, suscipit nisi. Phasellus gravida eu purus ac varius. Proin ipsum quam, euismod at risus eget, posuere tincidunt tellus. Nam euismod auctor eleifend. Nam libero ipsum, consequat in dolor eu, luctus varius leo.\n Integer quis tempor lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam venenatis imperdiet posuere. Pellentesque tristique urna a lectus auctor iaculis. Morbi vitae volutpat lorem. Donec ut venenatis enim. Fusce sit amet dui sit amet sapien consectetur molestie non eu tellus. Sed sit amet aliquet lorem. Nulla nec ultricies diam. Ut a varius velit, nec vestibulum orci. Pellentesque consequat laoreet venenatis. Morbi congue, massa quis feugiat ultrices, elit orci bibendum mauris, sit amet euismod nunc eros eu sapien. Pellentesque interdum sed purus sit amet posuere.";
var des2= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus elit, nec aliquam nisl dignissim porta. Aliquam leo nibh, tempor eu orci in, pulvinar volutpat felis. Pellentesque elementum ipsum mauris, in tempus elit sodales sit amet. Phasellus orci dolor, tempus at nisi quis, interdum luctus odio. Duis consequat auctor eleifend. Pellentesque tincidunt pellentesque tortor sit amet tincidunt. In aliquam nulla vel blandit bibendum. Curabitur non felis elit. Fusce vel rutrum purus, non consectetur turpis. Suspendisse vel bibendum diam. Pellentesque id erat volutpat, dapibus lacus eget, suscipit nisi. Phasellus gravida eu purus ac varius. Proin ipsum quam, euismod at risus eget, posuere tincidunt tellus. Nam euismod auctor eleifend. Nam libero ipsum, consequat in dolor eu, luctus varius leo.\n Integer quis tempor lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam venenatis imperdiet posuere. Pellentesque tristique urna a lectus auctor iaculis. Morbi vitae volutpat lorem. Donec ut venenatis enim. Fusce sit amet dui sit amet sapien consectetur molestie non eu tellus. Sed sit amet aliquet lorem. Nulla nec ultricies diam. Ut a varius velit, nec vestibulum orci. Pellentesque consequat laoreet venenatis. Morbi congue, massa quis feugiat ultrices, elit orci bibendum mauris, sit amet euismod nunc eros eu sapien. Pellentesque interdum sed purus sit amet posuere.";
var des3= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus elit, nec aliquam nisl dignissim porta. Aliquam leo nibh, tempor eu orci in, pulvinar volutpat felis. Pellentesque elementum ipsum mauris, in tempus elit sodales sit amet. Phasellus orci dolor, tempus at nisi quis, interdum luctus odio. Duis consequat auctor eleifend. Pellentesque tincidunt pellentesque tortor sit amet tincidunt. In aliquam nulla vel blandit bibendum. Curabitur non felis elit. Fusce vel rutrum purus, non consectetur turpis. Suspendisse vel bibendum diam. Pellentesque id erat volutpat, dapibus lacus eget, suscipit nisi. Phasellus gravida eu purus ac varius. Proin ipsum quam, euismod at risus eget, posuere tincidunt tellus. Nam euismod auctor eleifend. Nam libero ipsum, consequat in dolor eu, luctus varius leo.\n Integer quis tempor lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam venenatis imperdiet posuere. Pellentesque tristique urna a lectus auctor iaculis. Morbi vitae volutpat lorem. Donec ut venenatis enim. Fusce sit amet dui sit amet sapien consectetur molestie non eu tellus. Sed sit amet aliquet lorem. Nulla nec ultricies diam. Ut a varius velit, nec vestibulum orci. Pellentesque consequat laoreet venenatis. Morbi congue, massa quis feugiat ultrices, elit orci bibendum mauris, sit amet euismod nunc eros eu sapien. Pellentesque interdum sed purus sit amet posuere.";

var localstorageName = "numQuestions";
var badr = "Bad luck, you need to learn more about Fucidin !";
var medr = "Not bad, but you could do with some more practice !";
var goodr = "Good work, you know lots about Fucidin !";
var refl = "";
var reflq = "";
//var widthscreen = screen.width;
//var heightscreen = window.innerHeight;
//alert($(window).height());
//alert(window.innerHeight);
//alert(window.innerHeight);
var tmpgquest=null;
var racount = 0;
var numOfQuestions = 5;
var currentNumQuestion = 0;
var rating = 0;
var aa = $("#aa");
var ab = $("#ab");
var ac = $("#ac");
var ad = $("#ad");
var fl = $("#imgl");
var fc = $("#imgc");
var fr = $("#imgr");
var ttglobal;
var randarr = [];

var prescr_info = $("#pescr_infor");
var tryagainbtn = $("#tryagain");
var questCounter = $("#questionCounter");
var closeRefQuiz = $("#closeRefQuiz");
var resultText = $("#textresult");
var resultCount= $("#finsctxt");
var saveSetup = $("#savesetup");
var textgenerate = $("#textgenerator");
var reference = $("#reference");
var referenceQuestion = $("#referenceQuestion");
var reftextg = $("#reftextg");
var reftextgquestion = $("#reftextgquestion");
var textquestion = $("#textgeneratorquest");

var questions = [{question:"In what country was Fucidin® first marketed?", aa:"Denmark", ab:"USA", ac:"Norway" ,ad:"Switzerland", righta:"aa", ref:"",linkhref:"", link:false},
                
                 {question:"In 1987, the year LEO Pharma launched Fucicort®, what popular animated show made its first TV appearance?", aa:"The Muppet Show", ab:"The Smurfs", ac:"Teenage Mutant Ninja Turtles" ,ad:"The Simpsons",righta:"ad", ref:"http://uk.ask.com/question/what-year-did-the-simpsons-first-appear-on-tv",linkhref:"", link:true},
                 
                 {question:"In what year was Fucidin® first launched as a topical formulation?", aa:"1965", ab:"1967", ac:"1968" ,ad:"1970", righta:"aa", ref:"",linkhref:"", link:false},
                 
                 {question:"In what form was topical Fucidin® first launched?", aa:"Cream", ab:"Gel", ac:"Ointment" ,ad:"Cream and ointment", righta:"ac", ref:"",linkhref:"", link:false},
                 
                 {question:"By what brand name is Fucidin® known in Brazil?", aa:"Verutex®", ab:"Fucidex", ac:"Verudin" ,ad:"Fucidin®", righta:"aa", ref:"",linkhref:"", link:false},
                 
                 {question:"Fucidin® is an effective treatment for bacterial skin and soft tissue infections. Which of the following is NOT a bacterial infection?", aa:"Ringworm", ab:"Cellulitis", ac:"Impetigo" ,ad:"Paronychia", righta:"aa", ref:"",linkhref:"", link:false},
                 
                 {question:" In what year did LEO Pharma manufacture its 600 millionth tube of Fucidin® products?", aa:"2009", ab:"2010", ac:"2012" ,ad:"2013", righta:"ad", ref:"",linkhref:"", link:false},
                 
                 {question:"How many tons has LEO Pharma made since launch of fusidic acid and sodium fusidate?", aa:"25 million", ab:"250 million", ac:"2.5 million" ,ad:"0.25 million", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:"The maximum recommended time to use Fucidin® is two weeks. Which of these sporting events lasts for two weeks?", aa:"Olympic games", ab:"FIFA World Cup", ac:"Wimbledon Tennis" ,ad:"Ryder Cup", righta:"ac", ref:"",linkhref:"", link:false},
                 
                 {question:"What is the name of the fungus from which Fucidin® is derived?", aa:"Fucidium arbitum", ab:"Fucidium coccineum", ac:"Fucidium manuteum" ,ad:"Fucidium barilleum", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:"Fucidin® was first marketed in Denmark, which in 2013 did what?", aa:"Joined the Euro currency", ab:"Introduced a smoking ban", ac:"Won the Eurovision Song Contest" ,ad:"Elected its first female Prime Minister", righta:"ac", ref:"http://www.eurovision.tv/page/news?id=denmark_wins_2013_eurovision_song_contest",linkhref:"", link:true},
                 
                 {question:"In a study assessing patients’ perception of cosmetic acceptability, what percentage of patients rated Fucicort® Lipid cream as ‘good’ or ‘very good’?", aa:"66.8%", ab:"76.8%", ac:"80.8%" ,ad:"86.8%", righta:"ad", ref:"Schultz Larsen F et al. Acta Dermato-Venereol 2007;87:62-68",linkhref:"", link:false},
                 
                 {question:"The molecular structure of fusidic acid includes:", aa:"A four-ring structure", ab:"A two-ring structure", ac:"A beta-lactam ring" ,ad:"Four beta-lactam rings", righta:"aa", ref:"",linkhref:"", link:false},
                 
                 {question:"Which of these pathogens can cause impetigo, a condition treated with Fucidin®?", aa:"Streptococcal bacteria", ab:"Staphylococcal bacteria", ac:"Herpes simplex virus" ,ad:"Streptococcal and staphylococcal bacteria", righta:"ad", ref:"http://www.nlm.nih.gov/medlineplus/impetigo.html",linkhref:"", link:true},
                 
                 {question:"In what form was Fucidin® first launched?", aa:"Cream", ab:"Tablet", ac:"Gel" ,ad:"Ointment", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:"Fucidin® works by inhibiting:", aa:"Bacterial cell reproduction", ab:"Bacterial protein synthesis", ac:"Bacterial amino acid synthesis" ,ad:"Cell wall synthesis", righta:"ab", ref:"Verbist L. J Antimicrob Chemother 1990;25(Suppl B):1-5",linkhref:"", link:false},
                 
                 {question:"Which film won the Oscar for best film in 1965, the same year that Fucidin® was first launched as a topical formulation?", aa:"The Sound of Music", ab:"My Fair Lady", ac:"Goldfinger" ,ad:"Mary Poppins", righta:"ab", ref:"http://www.imdb.com/event/ev0000003/1965",linkhref:"", link:true},
                 
                 {question:"How much greater is the rate of Fucidin® skin penetration compared with mupirocin?", aa:"5 times", ab:"2 times", ac:"10 times" ,ad:"7 times", righta:"ac", ref:"Winkelman W et al. Clin Dermatol 1989;7(3):156-162",linkhref:"", link:false},
                 
                 {question:"In which year was Fucidin® cream launched?", aa:"1980", ab:"1978", ac:"1982" ,ad:"1984", righta:"ac", ref:"",linkhref:"", link:false},
                 
                 {question:"Which is the most recent Fucidin® topical preparation to be launched by LEO Pharma?", aa:"Fucicort®", ab:"Fucicort® Lipid", ac:"Fucidin® Suspension" ,ad:"Fucidin® gel", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:"Which of these products contains lanolin, a product made from wool?", aa:"Fucidin® cream", ab:"Fucidin® ointment", ac:"Both" ,ad:"Neither", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:"Fusidic acid is an antibiotic. Who discovered the first antibiotic, penicillin?", aa:"Alexander Armstrong", ab:"Alexander Fleming", ac:"Ian Fleming" ,ad:"Alexander Young", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:" The skin is the largest human organ. What is its total surface area?", aa:"2 m²", ab:"12 m²", ac:"0.25 m²" ,ad:"20 m²", righta:"aa", ref:"http://www.bbc.co.uk/science/humanbody/body/factfiles/skin/skin.shtml",linkhref:"", link:true},
                 
                 {question:"LEO Pharma has made more than 600 million tubes of Fucidin® products, but which type of product makes over $600 million in sales each Halloween in the USA?", aa:"Pumpkins", ab:"Fireworks", ac:"Sugar candy" ,ad:"Chocolate", righta:"ac",ref:"http://www.huffingtonpost.com/2011/10/28/halloween-candy-facts- statistics_n_1062687.html#s438332&title=Chocolate_Wins", linkhref:"", link:true},
                 
                 {question:"Which of these is NOT a type of eczema?", aa:"Discoid eczema", ab:"Seborrhoeic eczema", ac:"Varicose eczema" ,ad:"Psoriasis", righta:"ad", ref:"http://www.nhs.uk/conditions/Eczema-(atopic)/Pages/Introduction.aspx",linkhref:"", link:true},
                 
                 {question:"Which country won the FIFA World Cup in 1982, the year Fucidin® cream was launched?", aa:"France", ab:"Argentina", ac:"Italy" ,ad:"Brazil", righta:"ac", ref:"http://www.fifa.com/tournaments/archive/worldcup/spain1982/index.html",linkhref:"", link:true},
                 
                 {question:"To what extent does Fucidin® show cross resistance with other antibiotics?", aa:"Up to 15%", ab:"Less than 5%", ac:"Less than 1%" ,ad:"None shown", righta:"ad", ref:"Schöfer H, et al. Eur J Dermatol 2010; 20 (1): 6-15",linkhref:"", link:false},
                 
                 {question:"In 1908, the year LEO Pharma was founded, the British writer Ian Fleming was born. What well known fictional character did Fleming create?", aa:"Peter Pan", ab:"Hercule Poirot", ac:"James Bond" ,ad:"Sherlock Holmes", righta:"ac", ref:"http://www.ianfleming.com/ian-fleming/",linkhref:"", link:true},
                 
                 {question:"Which of the following 4 antibiotics shows the lowest allergenic/skin sensitizing potential?", aa:"Fusidic acid", ab:"Neomycin", ac:"Clioquinol" ,ad:"Gentamycin", righta:"aa", ref:"Strategos J. Pharmatherapeutica 1986;4(9):601-6",linkhref:"", link:false},
                 
                 {question:"Fucidin® reaches effective tissue levels within 2 hours of application. Where could you fly within the same time period?", aa:"Berlin to Prague", ab:"Los Angeles to San Francisco", ac:"Melbourne to Sydney" ,ad:"Barcelona to London", righta:"ad", ref:"http://www.travelmath.com/flying-time/from/Barcelona,+Spain/to/London,+United+Kingdom", link:true},
                 
                 {question:"Which of these tube sizes is NOT available for Fucidin®?", aa:"15 g", ab:"30 g", ac:"100 g" ,ad:"30 g and 100 g", righta:"ac", ref:"",linkhref:"", link:false},
                 
                 {question:"The word eczema comes from the Greek word ‘ekzein’, which means:", aa:"to itch", ab:"to boil", ac:"to become red" ,ad:"to burn", righta:"ab", ref:"National Eczema Society. http://www.eczema.org/what-is-eczema",linkhref:"http://www.eczema.org/what-is-eczema", link:true},
                 
                 {question:"How does Fucidin® exert antibacterial action?", aa:"by inhibiting bacterial protein synthesis", ab:"by directly causing necrosis of bacterial protein cells", ac:"by encouraging the immune system to destroy bacterial protein cells" ,ad:"by inhibiting bacterial protein synthesis AND encouraging the immune system to destroy bacterial protein cells", righta:"aa", ref:"Schöfer H et al. Eur J Dermatol 2010;20(1):6-15",linkhref:"", link:false},
                 
                 {question:"Fucidin® can penetrate:", aa:"damaged skin but not intact skin", ab:"intact skin but not damaged skin", ac:"neither intact or damaged skin" ,ad:"both damaged and intact skin", righta:"ad", ref:"Stuttgen G et al. Arzneim Forsch 1988;38(5):730-735",linkhref:"", link:false},
                 
                 {question:"LEO Pharma markets its products in over 100 countries. Which restaurant company is also present in over 100 countries?", aa:"Burger King", ab:"TGI Fridays", ac:"McDonald’s" ,ad:"Hard Rock Café", righta:"ac", ref:"http://www.mcdonalds.co.uk/ukhome/whatmakesmcdonalds/questions/work-with- us/employee-diversity/how-many-mcdonalds-restaurants-operate-in-uk-and-worldwide.html",linkhref:"", link:true},
                 
                 {question:"Which product is generally more suitable for first line use in children?", aa:"Fucicort®", ab:"Fucidin® H", ac:"Either" ,ad:"Neither", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:"Fucidin® was first marketed in Denmark, LEO Pharma’s country of origin. Who is the head of state in Denmark?", aa:"Prime Minister Lars Rasmussen", ab:"Queen Beatrix", ac:"Prime Minister Helle Thorning- Schmidt" ,ad:"Queen Margrethe", righta:"ad", ref:"",linkhref:"", link:false},
                 
                 {question:"Which of these factors plays a role in enabling Fucidin® to penetrate through lipid layers?", aa:"Low allergenicity", ab:"High activity against S. aureus", ac:"Steroid-like structure" ,ad:"Low sensitizing potential", righta:"ac", ref:"",linkhref:"", link:false},
                 
                 {question:"The shelf life of Fucidin® cream in most markets is:", aa:"18 months", ab:"2 years", ac:"30 months" ,ad:"3 years", righta:"ad", ref:"",linkhref:"", link:false},
                 
                 {question:"Fucidin® H contains hydrocortisone. In which decade was the cortisone compound first developed as an anti-inflammatory?", aa:"The 1920s", ab:"The 1940s", ac:"The 1950s" ,ad:"The 1960s", righta:"ac", ref:"http://www.mayoclinic.org/tradition-heritage-artifacts/67-1.html",linkhref:"", link:true},
                 
                 {question:"How many strains of methicillin resistant S. aureus (MRSA) does Fucidin® inhibit?", aa:"80.7%", ab:"99.7%", ac:"89.7%" ,ad:"92.7%", righta:"ab", ref:"Jones Ronald N et al. Clin Infect Dis 2011;52(7):S477-86",linkhref:"", link:false},
                 
                 {question:"Which of the following antibiotics shows the lowest allergenic/skin sensitizing potential?", aa:"Fusidic acid", ab:"Neomycin", ac:"Clioquinol" ,ad:"Fusidic acid and neomycin", righta:"aa", ref:"Strategos J. Pharmatherapeutica 1986;4(9):601-6",linkhref:"", link:false},
                 
                 {question:"How much more effective in its anti-eczema action is Fucidin® H than hydrocortisone alone?", aa:"35% more effective", ab:"50% more effective", ac:"100% more effective" ,ad:"None of these", righta:"ac", ref:"Ramsay CA et al. Eur Acad Dermatol Venereol 1996;7(Suppl.1):S15-S22",linkhref:"", link:false},
                 
                 {question:"What percentage clinical response rate was demonstrated in 172 patients with impetigo when treated for 7 days with Fucidin®, in the study by Oranje in 2007?", aa:"60%", ab:"75%", ac:"80%" ,ad:"90%", righta:"ad", ref:"Oranje AP et al. Dermatol 2007;215:331-340",linkhref:"", link:false},
                 
                 {question:"In a study with 138 patients with superficial skin infections, treated with Fucidin® for 7 days, what level of clinical response was shown?", aa:"68%", ab:"73%", ac:"83%" ,ad:"93%", righta:"ad", ref:"White DG et al. J Infect 1989;18:221-229",linkhref:"", link:false},
                 
                 {question:"To treat a dry, crusty skin lesion, which Fucidin® product would be most suitable?", aa:"Fucidin® cream", ab:"Fucidin® ointment", ac:"Fucidin® suspension" ,ad:"None of these", righta:"ab", ref:"",linkhref:"", link:false},
                 
                 {question:"Fucidin® (fusidic acid) shows:", aa:"Strong surface activity and is also fat soluble", ab:"Low surface activity and it is not fat soluble", ac:"Strong surface activity and is not fat soluble" ,ad:"None of these", righta:"aa", ref:"Stewart GT. Pharmakotherapia 1964;2:137-148",linkhref:"", link:false},
                 
                 {question:"Why does Fucidin® not have steroidal effects, despite its steroid-like structure?", aa:"Configuration of its central ring", ab:"No beta lactam ring", ac:"A modified elongation factor G" ,ad:"A beta lactam ring and modified elongation factor G", righta:"ad", ref:"",linkhref:"", link:false},
                 
                 {question:"Fusidic acid is an antibiotic obtained by fermentation of the fungus Fusidium coccineum, isolated by LEO Pharma in 1960. The fungus was originally discovered in the faeces of which animal?", aa:"Elephant", ab:"Monkey", ac:"Mouse" ,ad:"Hamster", righta:"ab", ref:"Musmade PB et al. Int J Pharm Sci 2013;5(Suppl. 4):737-746",linkhref:"", link:false},
                 
                 {question:"What percentage of patients with atopic dermatitis has skin colonization with Staphylococcus aureus?", aa:"> 90%", ab:"> 80%", ac:"> 70%" ,ad:"> 60%", righta:"aa", ref:"Abeck D et al. Br J Dermatol 1998;139(53):13-16",linkhref:"", link:false},
                 
                 {question:"The description of a novel antimicrobial, Fucidin®, was first published in 1962 in which journal?", aa:"Nature", ab:"Current Therapeutic Research", ac:"Dermatology" ,ad:"Medicine Today", righta:"aa", ref:"Godtfredsen WO. Nature 1962:193(4819):987",linkhref:"", link:false},
                 
                 {question:"Is Fucidin® active against Propionibacterium acnes?", aa:"Yes", ab:"No", ac:"Only in combination with other therapy" ,ad:"Not known", righta:"aa", ref:"Adams J and Thorn P. Curr Ther Res 1991;50(2):268-273",linkhref:"", link:false},
                 
                 {question:"Which micro-organisms is fucidic acid primarily active against?", aa:"Gram-negative organisms", ab:"Gram-positive organisms", ac:"Fungi" ,ad:"Gram-positive and gram-negative organisms", righta:"ab", ref:"Bogdanovich T et al. Antimicrob Agents Chemother 2005;49:4210-4219. Soriano F et al. Antimicrob Agents Chemother 1995;39:208-214",linkhref:"", link:false},
                 
                 {question:"Are the staphylococci that fusidic acid is active against resistant to any other antibiotics?", aa:"They are resistant to no antibiotics", ab:"They are resistant to one other antibiotic", ac:"They are resistant to more than one other antibiotic" ,ad:"Not known", righta:"ac", ref:"Bogdanovich T et al. Antimicrob Agents Chemother 2005;49:4210-4219. Soriano F et al. Antimicrob Agents Chemother 1995;39:208-214",linkhref:"", link:false},
                 
                 {question:"Because Fucidin® penetrates skin so effectively, what is it able to reach faster than many of its competitors?", aa:"The bloodstream", ab:"Deeper layers of tissue", ac:"The muscle cells" ,ad:"The fat cells", righta:"ab", ref:"Knight AG et al. Br J Dermatol 1969;81:88-91. Winkelman W et al. Clin Dermatol 1989;7:156-62",linkhref:"", link:false},
                 
                 {question:"Because Fucidin® is not similar in structure to other clinically used antibiotics and does not induce similar bacterial resistance, what advantage does this confer?", aa:"Greater skin penetration", ab:"Broader spectrum of activity", ac:"Greater fat solubility" ,ad:"No cross resistance", righta:"ad", ref:"Schöfer H, et al. Eur J Dermatol 2010; 20 (1): 6-15",linkhref:"", link:false},
                 
                 {question:"What type of antibiotic activity does Fucidin® have?", aa:"Narrow spectrum, gram-positive", ab:"Broad spectrum, gram-positive", ac:"Narrow spectrum, gram-negative" ,ad:"Broad spectrum, gram-negative", righta:"aa", ref:"Bogdanovich T et al. Antimicrob Agents Chemother 2005;49:4210-4219. Soriano F et al. Antimicrob Agents Chemother 1995;39:208-214",linkhref:"", link:false}];

var factors = [{factor:"Fucidin® was first marketed in Denmark.", ref:"",link:false, linkhref:""},
               
               {factor:"In 1987, ‘The Simpsons’ made its first TV appearance, which is the same year that LEO Pharma launched Fucicort®.", ref:"http://uk.ask.com/question/what-year-did-the-simpsons-first-appear-on-tv",link:true, linkhref:""},
               
               {factor:"Fucidin® was first launched as a topical formulation in 1965.", ref:"",link:false, linkhref:""},
               
               {factor:"Fucidin® is known as Verutex® in Brazil.", ref:"",link:false, linkhref:""},
               
               {factor:"Topical Fucidin® was first launched as an ointment.", ref:"",link:false, linkhref:""},
               
               {factor:"Cellulitis, impetigo and paronychia are bacterial infections, whereas ringworm is a fungal infection.", ref:"",link:false, linkhref:""},
               
               {factor:"Topical Fucidin® is faster than oral therapy in reaching effective tissue levels.", ref:"",link:false, linkhref:""},
               
               {factor:"In 2013, LEO Pharma manufactured its 600 millionth tube of Fucidin® products.", ref:"",link:false, linkhref:""},
               
               {factor:"LEO Pharma has made 250 million tons of fusidic acid and sodium fusidate since launch, which is about half as much as the maximum take-off weight of a Boeing 747.", ref:"http://www.boeing.com/boeing/commercial/747family/pf/pf_facts.page",link:true, linkhref:""},
               
               {factor:"The maximum length of time you would be recommended to use Fucidin® is two weeks, which is the same length of time as the Wimbledon Tennis Tournament.", ref:"",link:false, linkhref:""},
               
               {factor:"The fungus from which Fucidin® is derived is called fucidium coccineum.", ref:"",link:false, linkhref:""},
               
               {factor:"Fucidin® was first marketed in Denmark, which in 2013 won the Eurovision Song Contest.", ref:"http://www.eurovision.tv/page/news?id=denmark_wins_2013_eurovision_song_contest",link:true, linkhref:""},
               
               {factor:"In a study assessing patients’ perception of cosmetic acceptability, 86.8% of patients rated Fucicort® Lipid cream as ‘good’ or ‘very good’.", ref:"Schultz Larsen F et al. Acta Dermato-Venereol 2007;87:62-68",link:false, linkhref:""},
               
               {factor:"The steroid-like molecular structure of fusidic acid includes a four-ring structure.", ref:"",link:false, linkhref:""},
               
               {factor:"The pathogens that commonly cause impetigo, a condition treated with Fucidin®, are streptococcal and staphylococcal bacteria.", ref:"http://www.nlm.nih.gov/medlineplus/impetigo.html",link:true, linkhref:""},
               
               {factor:"Fucidin® was first launched as a tablet.", ref:"",link:false, linkhref:""},
               
               {factor:"Fucidin® works by inhibiting bacterial protein synthesis.", ref:"Verbist L. J Antimicrob Chemother 1990;25 (Suppl B):1-5",link:false, linkhref:""},
               
               {factor:"The Oscar for best film in 1965 was won by ‘My Fair Lady’, the same year that Fucidin® was first launched as a topical formulation.", ref:"http://www.imdb.com/event/ev0000003/1965",link:true, linkhref:""},
               
               {factor:"The rate of Fucidin® skin penetration is 10 times greater than that of mupirocin.", ref:"Winkelman W et al. Clin Dermatol 1989;7(3):156-162.)",link:false, linkhref:""},
               
               {factor:"Fucidin® cream was launched in 1982.", ref:"",link:false, linkhref:""},
               
               {factor:"The most recent Fucidin® topical preparation to be launched by LEO Pharma is Fucicort® Lipid.", ref:"",link:false, linkhref:""},
               
               {factor:"Fucidin® ointment contains lanolin (which is a product derived from wool), but Fucidin® cream does not.", ref:"",link:false, linkhref:""},
               
               {factor:"Fusidic acid is an antibiotic. The first antibiotic, penicillin, was discovered by Alexander Fleming in 1928.", ref:"",link:false, linkhref:""},
               
               {factor:"The skin is the biggest human organ, with a total surface area of 2 m².", ref:"http://www.bbc.co.uk/science/humanbody/body/factfiles/skin/skin.shtml",link:true, linkhref:""},
               
               {factor:"LEO Pharma has made more than 600 million tubes of Fucidin® products; which is the same as the number of dollars the USA makes on sugar candy sales each Halloween.", ref:"http://www.huffingtonpost.com/2011/10/28/halloween-candy-facts-statistics_n_1062687.html#s438332&title=Chocolate_Wins",link:true, linkhref:""},
               
               {factor:"There are several types of eczema including discoid, seborrhoeic and varicose, but the condition known as Psoriasis is not defined or classified as a type of eczema.", ref:"http://www.nhs.uk/conditions/Eczema-(atopic)/Pages/Introduction.aspx",link:true, linkhref:""},
               
               {factor:"In 1982 Italy won the FIFA world cup, which is the same year that Fucidin® cream was launched.", ref:"http://www.fifa.com/tournaments/archive/worldcup/spain1982/index.html",link:true, linkhref:""},
               
               {factor:"Fucidin® has not shown any cross resistance with other antibiotics.", ref:"Schöfer H, et al. Eur J Dermatol 2010; 20 (1): 6-15",link:false, linkhref:""},
               
               {factor:"In 1908 the British writer Ian Fleming, creator of James Bond, was born, which is the same year LEO that Pharma was founded.", ref:"http://www.ianfleming.com/ian-fleming/",link:true, linkhref:""},
               
               {factor:"Fusidic acid has shown lower allergenic/skin sensitising potential than neomycin and clioquinol.", ref:"Strategos J. Pharmatherapeutica 1986;4(9):601-6",link:false, linkhref:""},
               
               {factor:"Fucidin® reaches effective tissue levels within 2 hours of application; which is approximately the same amount of time it would take you to fly from Barcelona to London.", ref:"http://www.travelmath.com/flying-time/from/Barcelona,+Spain/to/London,+United+Kingdom",link:true, linkhref:""},
               
               {factor:"Fucidin® is available in 15 g and 30 g tube sizes, but not 100 g.", ref:"",link:false, linkhref:""},
               
               {factor:"The word eczema derives from the Greek word ‘ekzein’, which means to boil.", ref:"National Eczema Society. http://www.eczema.org/what-is-eczema",link:true, linkhref:"http://www.eczema.org/what-is-eczema"},
               
               {factor:"Fucidin® exerts antibacterial action by inhibiting bacterial protein synthesis.", ref:"Schöfer r H et al. Eur J Dermatol 2010;20(1):6-15.",link:false, linkhref:""},
               
               {factor:"Fucidin® can penetrate both damaged and intact skin.", ref:"Stuttgen G et al. Arzneim Forsch 1988;38(5):730-735.",link:false,linkhref:""},
               {factor:"In 2014, LEO Pharma markets its products in over 100 countries, just as the McDonald’s restaurant company is present in over 100 countries.", ref:"http://www.mcdonalds.co.uk/ukhome/whatmakesmcdonalds/questions/work-with-us/employee-diversity/how-many-mcdonalds-restaurants-operate-in-uk-and-worldwide.html",link:true, linkhref:""},
               
               {factor:"Fucidin® H is generally more suitable than Fucicort® for first line use in children.", ref:"",link:false, linkhref:""},
               
               {factor:"Fucidin® was first marketed in Denmark, a country where the constitutional monarch is Queen Margrethe.", ref:"",link:false, linkhref:""},
               
               {factor:"The steroid-like structure of fusidic acid plays a role in enabling Fucidin® to penetrate through lipid layers.", ref:"",link:false, linkhref:""},
               
               {factor:"The shelf life of Fucidin® cream is 3 years in most markets.", ref:"",link:false, linkhref:""},
               
               {factor:"Fucidin® H contains hydrocortisone. The cortisone compound was first developed as an anti-inflammatory in the 1950s.", ref:"http://www.mayoclinic.org/tradition-heritage-artifacts/67-1.html",link:true, linkhref:""},
               
               {factor:"Fucidin® inhibits 99.7% of strains of methicillin resistant S. aureus (MRSA).", ref:"Jones Ronald N et al. Clin Infect Dis 2011;52(7):S477-86.",link:false, linkhref:""},
               
               {factor:"Fucidin® H is 100% more effective in its anti-eczema action than hydrocortisone alone.", ref:"Ramsay CA et al. Eur Acad Dermatol Venereol 1996;7(Suppl.1):S15-S22.",link:false, linkhref:""},
               
               {factor:"In the 2007 Oranje study, a 90% clinical response rate was demonstrated in 172 patients with impetigo when treated for 7 days with Fucidin®.", ref:"Oranje AP et al. Dermatol 2007;215:331-340.",link:false, linkhref:""},
               
               {factor:"In a study with 138 patients with superficial skin infections, treated with Fucidin® for 7 days, a 93% clinical response was shown.", ref:"White DG et al. J Infect 1989;18:221-229.",link:false, linkhref:""},
               
               {factor:"To treat a dry, crusty skin lesion, Fucidin® ointment would be more suitable than the cream or suspension formulation.", ref:"",link:false, linkhref:""},
               
               {factor:"Fucidin® (fusidic acid) shows strong surface activity and is also fat soluble.", ref:"Stewart GT. Pharmakotherapia 1964;2:137-148.",link:false, linkhref:""},
               
               {factor:"Because of the configuration of its central ring Fucidin® does not have steroidal effects, despite its steroid-like structure.", ref:"",link:false, linkhref:""},
               
               {factor:"Fusidic acid is an antibiotic obtained by fermentation of the fungus Fusidium coccineum, isolated by LEO Pharma in 1960. The fungus was originally discovered in the faeces of monkeys.", ref:"Musmade PB et al. Int J Pharm Sci 2013;5(Suppl. 4):737-746.",link:false, linkhref:""},
               
               {factor:"The percentage of patients with atopic dermatitis whose skin is colonized with Staphylococcus aureus is > 90%.", ref:"Abeck D et al. Br J Dermatol 1998;139(53):13-16.",link:false, linkhref:""},
               
               {factor:"The description of a novel antimicrobial, Fucidin®, was first published in 1962 in the journal Nature.", ref:"Godtfredsen WO. Nature 1962:193(4819):987.",link:false, linkhref:""},
               
               {factor:"Fucidin® is active against Propionibacterium acnes.", ref:"Adams J and Thorn P. Curr Ther Res 1991;50(2):268-273",link:false, linkhref:""},
               
               {factor:"Fusidic acid is primarily active against gram-positive organisms.", ref:"Bogdanovich T et al. Antimicrob Agents Chemother 2005;49:4210-4219. Soriano F et al. Antimicrob Agents Chemother 1995;39:208-214.",link:false, linkhref:""},
               
               {factor:"The staphylococci that fusidic acid is active against are resistant to more than one other antibiotic.", ref:"Bogdanovich T et al. Antimicrob Agents Chemother 2005;49:4210-4219. Soriano F et al. Antimicrob Agents Chemother 1995;39:208-214.",link:false, linkhref:""},
               
               {factor:"Because Fucidin® penetrates skin so effectively, it is able to reach deeper layers of tissue faster than many of its competitors.", ref:"Knight AG et al. Br J Dermatol 1969;81:88-91. Winkelman W et al. Clin Dermatol 1989;7:156-62.",link:false, linkhref:""},
   
			   {factor:"Fucidin® is a narrow spectrum antibiotic that acts against gram-positive organisms.", ref:"Bogdanovich T et al. Antimicrob Agents Chemother 2005;49:4210-4219. Soriano F et al. Antimicrob Agents Chemother 1995;39:208-214.",link:false, linkhref:""}, 
	   
				{factor:"Because Fucidin® is not similar in structure to other clinically used antibiotics and does not induce similar bacterial resistance, there is no cross resistance with these other antibiotics.", ref:"Schöfer H, et al. Eur J Dermatol 2010; 20 (1): 6-15.",link:false, linkhref:""},
			   
			   {factor:"Because Fucidin® penetrates skin so effectively, it is able to reach deeper layers of tissue faster than many of its competitors.", ref:"Knight AG et al. Br J Dermatol 1969;81:88-91. Winkelman W et al. Clin Dermatol 1989;7:156-62.",link:false, linkhref:""}];//58 - fact 58  (repeated) does not show up

//launch
initListeners();
//initStyleForMultiResolution();
generateFact();
//launch



function showConfirm() {
    $('#confirmDialog').popup('open');
}

function goHomePage(){
    if(currentNumQuestion>1){
        showConfirm();
        return;
    }
    $.mobile.changePage( "#startscreen", { transition: "slide"} );
    resetState();
}

function goHomeWithoutPopup(){
    
}

function getWightHeightParam(){
    
}

function initListeners(){
    initSetup();
    prescr_info.click(goPrescInfo);
    reftextg.click(goRefLink);
    reftextgquestion.click(goRefLinkQuestion);
    tryagainbtn.click(tryAgain);
    closeRefQuiz.click(closeRefQ);
    
    $("._imgl.l").click(goDetailedDescr);
    $("._imgl.c").click(goDetailedDescr);
    $("._imgl.r").click(goDetailedDescr);
    
    $("#f1").click(goDetailedDescr);
    $("#f2").click(goDetailedDescr);
    $("#f3").click(goDetailedDescr);
    referenceQuestion.click(resetTimerQuestion);
    $("#confirmCloseFFQ").click(confirmCloseFFQ);
    
    // $("#funquiz").click(generateQuestion);
    $(textgeneratorbtn).click(generateFact);
    $(saveSetup).click(saveSetupConfig);
    $(".lefticonbtn.setup").click(goSetupPage);
    $(".lefticonbtn.home").click(goHomePage);
    addEventListenerGroupAnswer();
}

function confirmCloseFFQ(){
    $.mobile.changePage( "#startscreen", { transition: "slide"} );
    resetState();
}

$( "#funfactsquestion" ).on( "pagehide", function( event ) {
                            resetState();
                            });

$( "#funfactsquestion" ).on( "pagebeforeshow", function( event ) {
                            generateQuestion();
                            });

function goDetailedDescr(){
    if(this.id == "imgl" || this.id=="f1"){
        $("._img.common").attr("src","sprites/_gl.png");
        $("#textarea-pi").text(des1);
    }else if(this.id == "imgc" || this.id=="f2"){
        $("._img.common").attr("src","sprites/_gc.png");
        $("#textarea-pi").text(des2);
    }else{
        $("._img.common").attr("src","sprites/_gr.png");
        $("#textarea-pi").text(des3);
    }
    $.mobile.changePage( "#pinfodet", { transition: "slide"} )
}

function goPrescInfo(){
    $.mobile.changePage( "#pinfo", { transition: "slideup"} );
}

function goRefLink(){
    if(refl!=""){
        window.open(encodeURI(refl), '_blank');
    }
}

function goRefLinkQuestion(){
    if(reflq!=""){
        window.open(encodeURI(reflq), '_blank');
    }
}

function tryAgain(){
    resetState();
    $.mobile.changePage( "#funfactsquestion", { transition: "slide"} );
}

function initSetup(){
    numOfQuestions = localStorage.getItem(localstorageName);
    if(numOfQuestions==null){
        numOfQuestions = $("#select-num-question").val();
    }else{
        $("#select-num-question").val( numOfQuestions ).prop('selected',true);
        //$("#select-num-question")[11].selected = 'selected';
    }
}

function saveSetupConfig(){
    numOfQuestions = $("#select-num-question").val();
    localStorage.setItem(localstorageName,numOfQuestions);
    $('#popupDialogSetup').popup('open');
}

function goSetupPage(){
    $.mobile.changePage( "#setup", { transition: "slidedown"} );
}

function resetState(){
    currentNumQuestion = 0;
    racount = 0;
    questCounter.text("0/0");
    randarr.length = 0;
    randarr = [];
}

function addEventListenerGroupAnswer(){
    $(aa).click(answerQuestion);
    $(ab).click(answerQuestion);
    $(ac).click(answerQuestion);
    $(ad).click(answerQuestion);
}

function removeAnswerListener(){
    $(aa).unbind( "click" );
    $(ab).unbind( "click" );
    $(ac).unbind( "click" );
    $(ad).unbind( "click" );
}

function generateFact(){
   /* var tt = 0;
    for(tt; tt < questions.length; tt++){
        alert("num="+tt+" "+questions[tt].question+"\n "+questions[tt].righta);
    }*/
    
    var rn = Math.floor((Math.random() * factors.length));
    var strt = factors[rn].factor;
    var strr = factors[rn].ref;
    var islink = factors[rn].link;
    var refr = factors[rn].linkhref;
    textgenerate.text(strt);
    
    if(factors[rn].ref!=""){
        reference.css({'visibility' : 'visible' });
        reftextg.text(strr);
        if(islink){
            if(refr!=""){
                refl = refr;
            }else{
                refl = strr;
            }
        }else{
            refl="";
        }
    }else{
        reference.css({'visibility' : 'hidden' });
    }
}

function generateQuestion(){
    currentNumQuestion++;
    //alert(randarr.length);
    if(currentNumQuestion>numOfQuestions){
        $.mobile.changePage( "#funfactsqresult", { transition: "slideup"} );
        showResultMessage();
        return;
    }
    var qt = "Question "+currentNumQuestion+"/"+numOfQuestions;
    questCounter.text(qt);
    var ttr = false;
    var rn;
    while(ttr==false){
        rn = Math.floor((Math.random() * questions.length));
        if(randarr.length==0){
            ttr = true;
        }
        for(var jj = 0; jj < randarr.length; jj++){
            if(randarr[jj]==rn){
                ttr = false;
                break;
            }else{
                ttr = true;
            }
        }
    }
    randarr.push(rn);
    var qtxt = questions[rn].question;
    var atxt = questions[rn].aa;
    var btxt = questions[rn].ab;
    var ctxt = questions[rn].ac;
    var dtxt = questions[rn].ad;
    var strrq = questions[rn].ref;
    var islink = questions[rn].link;
    var refr = questions[rn].linkhref;
    
    referenceQuestion.css({'visibility':'hidden'});
    /*if(questions[rn].ref!=""){
        referenceQuestion.css({'visibility' : 'visible'});
        reftextgquestion.text(strrq);
        if(islink){
            if(refr!=""){
                reflq = refr;
            }else{
                reflq = strrq;
            }
        }else{
            reflq="";
        }
    }else{
        referenceQuestion.css({'visibility' : 'hidden' });
    }*/
    var objt = [aa, ab, ac, ad];
    var arra = [atxt, btxt, ctxt, dtxt];
    for(var i = 0; i < 4; i++){
        if(arra[i]==""){
            objt[i].css({'visibility' : 'hidden' });
        }else{
            objt[i].css({'visibility' : 'visible'});
        }
    }
    aa.text(atxt);
    ab.text(btxt);
    ac.text(ctxt);
    ad.text(dtxt);
    tmpgquest = questions[rn];
    textquestion.text(qtxt);
}

function showResultMessage(){
    var percwin = racount/numOfQuestions*100;
    var message;
    if(percwin>33 && percwin<66){
        message = medr;
    }else if(percwin>66){
        message = goodr;
    }else{
        message = badr;
    }
    resultCount.text(racount+"/"+numOfQuestions);
    resultText.text(message);
    //alert(percwin +"win rate");
}

function answerQuestion(){
    //alert(this.id);
    //alert(tmpgquest);
    if(tmpgquest.righta==this.id){
        animateRightAnswer(this.id);
        racount++;
    }else{
        animateWrongAnswer(this.id,tmpgquest.righta);
    }
    removeAnswerListener();
}

function animateWrongAnswer(wrong,right){
    $("#"+wrong).attr('class', 'btncf greywrong');
    var tt=setTimeout(function(){animateRightAnswer(right)},1000);
}

function animateRightAnswer(id){
    $("#"+id).attr('class', 'btncf greyright');
    var tt=setTimeout(function(){showReferenceInQuiz()},1000);
}

function showReferenceInQuiz(){
    var rn = randarr[randarr.length-1];
    var strrq = questions[rn].ref;
    var islink = questions[rn].link;
    var refr = questions[rn].linkhref;
    if(questions[rn].ref!=""){
        referenceQuestion.css({'visibility' : 'visible'});
        reftextgquestion.text(strrq);
        if(islink){
            if(refr!=""){
                reflq = refr;
            }else{
                reflq = strrq;
            }
        }else{
            reflq="";
        }
    }else{
        referenceQuestion.css({'visibility' : 'hidden' });
    }
    ttglobal=setTimeout(function(){resetButtonAnswerState()},4000);
}

function resetTimerQuestion(){
    window.clearTimeout(ttglobal);
}

function closeRefQ(){
    ttglobal=setTimeout(function(){resetButtonAnswerState()},2000);
}

function resetButtonAnswerState(){
    $("#aa").attr('class', 'btncf grey');
    $("#ab").attr('class', 'btncf grey');
    $("#ac").attr('class', 'btncf grey');
    $("#ad").attr('class', 'btncf grey');
    addEventListenerGroupAnswer();
    generateQuestion();
}


var widthscreen = screen.width;
var heightscreen = screen.height;
	
if (widthscreen < 480) {
	$("._tc").css({'width' : '320px', 'height' : '100%'});
	$(".pbig").css({'width' : '60%'});
	$("._redrect").css({'height' : '24%'});
	$(".pbig.bottom").css({'width' : '50%'});
	$("._orangerect").css({'height' : '35%'});
	$(".greyrect_prescr").css({'margin-top' : '25px'});
	$("._imgl").css({'width' : '28%'});
	$(".ui-content").css({'margin-bottom' : '48px'});
	$("._roundrect.setup").css({'height' : '66%'});
	$("._redtexth1").css({'font-size' : '28px' });
	$("._roundrect_inner").css({'margin-bottom' : '0'});
	$("._doctor").css({'bottom' : '-58px' });
	$(".leo.r").css({'bottom' : '-58px' });
	$("._roundrect").css({'border-width' : '5px' });
	$("._roundrect_small").css({'border-width' : '5px','margin-bottom' : '40px' });
	$("._say").css({'width' : '21%', 'bottom' : '-37px'});
	
	$("._roundrect").css({'margin-bottom' : '80px' });
	$("._roundrect.ff").css({'margin-bottom' : '92px' });
	$("._roundrect.ffq").css({'margin-bottom' : '76px', 'height' : '67%' });
	$("._roundrect.ffpi").css({'margin-bottom' : '92px', 'height' : '64%' });
	$("._roundrect.ffpif").css({'margin-bottom' : '92px', 'height' : '64%' });
	$("._roundrect.ffr").css({'margin-bottom' : '92px', 'height' : '21%' });
	$("._roundrect_small.ffr").css({'height' : '27%' });
	
	$("._roundrect.setup h1").css({'font-size' : '23pt' });
	$("._roundrect.setup p").css({'font-size' : '16pt' });
	$(".btncf.green").css({'width' : '175px', 'font-size' : '16px', 'line-height' : '30px' });  
	$(".btnc.gener_btn, #tryagain").css({'width' : '134px', 'font-size' : '11px'  }); 
	$("#textgenerator").css({'font-size' : '18px' });
	$(".posbtn").css({'margin-right' : '13px', 'bottom' : '7px'}); 
	$(".btncf.grey").css({'margin-left' : '15px', 'width' : '210px','font-size' : '10px' });
	$("#textresult").css({'font-size' : '20px' });
	$("._roundrect_small.ff").css({'height' : '44%'});
	$("._doctor.q ").css({'margin-top' : '-5%'}); 
	$("#textgeneratorquest").css({'font-size' : '15px' });
	$("._buttonansw").css({'left' : '18px', 'bottom' : '28px'});
	$("._buttonansw .posbtns.q").css({'margin' : '0 0 4px 0'});
	$("._imgl.pres").css({'width' : '100px', 'margin-right' : '20px'});
	$(".tableinfo").css({'width' : '70%'});
	$(".btnc.green.go").css({'font-size' : '18px'  });
	$("._img.common").css({'width' : '100px', 'margin-right' : '20px'});
}

if (heightscreen < 568){
	$(".pbig").css({'width' : '46%'});
	$("._redrect").css({'height' : '22%'});
	$("._orangerect").css({'height' : '41%'});
	$(".ui-content").css({'margin-bottom' : '25px'});
	$(".greyrect_prescr").css({'margin-top' : '12px'});
	$(".pbig.bottom").css({'width' : '45%'});
		
	$("._roundrect.ff").css({'margin-bottom' : '80px' });
	$("._roundrect.ffq").css({'margin-bottom' : '80px', 'height' : '82%' });
	$("._roundrect.ffpi").css({'margin-bottom' : '80px'});
	$("._roundrect.ffpif").css({'margin-bottom' : '62px' });
	$("._roundrect.ffr").css({'margin-bottom' : '80px' });
	
	$("._say").css({'bottom' : '-37px'});	
	$(".textd").css({'height' : '60%'});
	$("._roundrect.setup").css({'margin-bottom' : '80px', 'height' : '60%'});
	$(".btnc.green.go").css({'font-size' : '18px'  });
	$(".ui-page .ui-footer").css({'margin-top' : '80px'});
	$("#textgeneratorquest").css({'font-size' : '14px' });
	$("#questionCounter").css({'font-size' : '18px' });
	$("._roundrect.ffq ._roundrect_inner").css({'margin-bottom' : '0px'});
	$(".tableinfo.q").css({'height' : '20%'});
	$(".leo.r").css({'bottom' : '-42px' });
}
	
	
	
	
	
	
	
	
	
	