using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sol_Demo.Components
{
    public class RandomHelper
    {
        [JSInvokable]
        public async Task<int> GenerateRandomNoInt(int maxValue)
        {
            return await Task.Run(() => {

                return new Random().Next(maxValue);

            });
        }
    }
}
